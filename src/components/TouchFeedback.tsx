import React, { useState } from 'react';

interface TouchFeedbackProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export const TouchFeedback: React.FC<TouchFeedbackProps> = ({ 
  children, 
  className = '',
  onPress 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true);
    if (navigator.vibrate) {
      navigator.vibrate(10); // Haptic feedback on supported devices
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
    if (onPress) onPress();
  };

  return (
    <div
      className={`${className} transition-transform duration-100 ${
        isPressed ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={() => setIsPressed(false)}
    >
      {children}
    </div>
  );
};

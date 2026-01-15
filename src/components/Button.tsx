import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  href,
  target,
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled || loading) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);

    if (onClick) onClick();
  };

  const baseClasses = 'relative overflow-hidden font-heading font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-[#E50036] text-white hover:bg-[#c40030] hover:shadow-lg hover:shadow-[#E50036]/30 hover:-translate-y-0.5',
    secondary: 'bg-[#00102A] text-white hover:bg-[#001a3d] hover:shadow-lg hover:shadow-[#00102A]/30 hover:-translate-y-0.5',
    outline: 'border-2 border-white/30 text-white hover:bg-white hover:text-[#00102A] hover:border-white',
    ghost: 'text-white hover:bg-white/10'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded',
    md: 'px-6 py-3 text-sm rounded-md',
    lg: 'px-8 py-4 text-base rounded-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  const content = (
    <>
      {loading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
      
      {/* Ripple Effect */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '0px',
            height: '0px',
          }}
        />
      ))}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={handleClick}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

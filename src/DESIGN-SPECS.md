# SHL Game Center - Complete Design Specifications 🎨

## 📐 **Layout & Grid System**

### Container
- **Max Width:** 1280px (7xl)
- **Padding:** 16px mobile, 32px tablet, 64px desktop
- **Grid:** 12 columns (8 main + 4 sidebar on desktop)

### Breakpoints
```
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

---

## 🎨 **Color Palette**

### Brand Colors
```css
Primary Red:    #E50036  /* SHL Red - Buttons, accents, live indicators */
Primary Blue:   #005EB8  /* SHL Blue - Secondary accents */
Navy Dark:      #00102A  /* Header, navigation */
Navy Medium:    #151A26  /* Dark mode cards */
Navy Deep:      #0A0E17  /* Dark mode background */
```

### Light Theme
```css
Background:     #F9F9F9  /* Main background */
Card:           #FFFFFF  /* Card backgrounds */
Text Primary:   #242424  /* Headings, body text */
Text Secondary: #717182  /* Muted text */
Border:         #E5E7EB  /* Dividers, borders */
```

### Dark Theme
```css
Background:     #0A0E17  /* Main background */
Card:           #151A26  /* Card backgrounds */
Text Primary:   #FFFFFF  /* Headings, body text */
Text Secondary: #94A3B8  /* Muted text */
Border:         #1E293B  /* Dividers, borders */
```

### Accent Colors
```css
Success Green:  #00FF85  /* Live status, positive stats */
Warning Yellow: #FCD34D  /* Cautions */
Error Red:      #EF4444  /* Errors, penalties */
Info Blue:      #3B82F6  /* Information */
```

### Team Colors (SHL)
```css
Frölunda:       #E50036  /* Red */
Färjestad:      #FFFFFF  /* White/Yellow */
Luleå:          #000000  /* Black/Orange */
Växjö:          #006F3B  /* Green */
Rögle:          #FFCD00  /* Yellow */
```

---

## 📝 **Typography**

### Font Families
```css
Headings: 'Oswald', sans-serif
Body:     'Inter', sans-serif
```

### Font Sizes
```
Hero Score:        72px / 4.5rem  (bold 900)
H1:                48px / 3rem    (bold 700)
H2:                32px / 2rem    (bold 700)
H3:                24px / 1.5rem  (bold 600)
H4:                20px / 1.25rem (bold 600)
Body Large:        18px / 1.125rem (regular 400)
Body:              16px / 1rem    (regular 400)
Body Small:        14px / 0.875rem (regular 400)
Caption:           12px / 0.75rem (regular 400)
Button:            14px / 0.875rem (bold 700, uppercase)
```

### Line Heights
```
Tight:   1.2   (Headings, scores)
Normal:  1.5   (Body text)
Relaxed: 1.75  (Long-form content)
```

### Letter Spacing
```
Tight:      -0.025em  (Large headings)
Normal:     0em       (Body text)
Wide:       0.05em    (Buttons, labels)
Wider:      0.1em     (Small caps, navigation)
Widest:     0.15em    (Uppercase labels)
```

---

## 📦 **Components**

### Header
```
Height:          80px
Background:      #00102A
Logo Height:     48px
Nav Item:        14px Oswald, uppercase, tracking-widest
Nav Padding:     16px horizontal
Sticky:          Yes (top: 0, z-index: 50)
```

### Club Bar (Team Logos)
```
Height:          48px
Logo Size:       32px × 32px
Gap:             32px
Filter:          grayscale(100%) opacity(0.7)
Hover:           grayscale(0%) opacity(1) scale(1.1)
```

### Hero Section
```
Padding:         96px vertical, 16px horizontal
Background:      Gradient (radial red + blue blurs)
Team Logo:       128px × 128px (desktop), 96px (mobile)
Score Font:      72px Oswald, weight 900
Status Badge:    12px uppercase, 8px padding
Live Indicator:  8px red dot, pulsing animation
```

### Sticky Mini Score
```
Height:          48px
Background:      rgba(0, 16, 42, 0.95) + backdrop-blur
Team Logo:       32px × 32px
Score Font:      32px Oswald, weight 900
Trigger:         Scroll > 400px
Animation:       Slide down 300ms ease-out
```

### Tab Navigation
```
Height:          60px
Background:      #00102A
Tab Padding:     16px vertical, 32px horizontal
Font:            14px Oswald, uppercase, tracking-widest
Active Color:    #E50036
Active Border:   4px bottom, #E50036
Hover:           opacity 100%, scale 1.05
Sticky:          Yes (top: 80px, z-index: 40)
```

### Cards
```
Border Radius:   12px
Padding:         24px
Shadow:          0 4px 12px rgba(0,0,0,0.08)
Border:          1px solid (theme-based)
Hover:           translateY(-4px), shadow-lg
Transition:      300ms ease-out
```

### Buttons

#### Primary Button
```
Background:      #E50036
Color:           #FFFFFF
Padding:         12px 24px
Border Radius:   8px
Font:            14px Oswald, uppercase, tracking-wide, bold
Hover:           scale(1.05), brightness(1.1)
Active:          scale(0.98)
Ripple Effect:   Yes (600ms animation)
```

#### Secondary Button
```
Background:      transparent
Border:          2px solid #E50036
Color:           #E50036
Padding:         10px 22px
```

#### Icon Button
```
Size:            40px × 40px
Padding:         8px
Border Radius:   50%
Background:      rgba(255,255,255,0.1)
Hover:           rgba(255,255,255,0.2)
```

### News Carousel
```
Card Width:      320px
Card Height:     400px
Image Height:    180px
Gap:             16px
Scroll:          Smooth, auto-scroll 5s interval
Pause on Hover:  Yes
Border Radius:   8px
```

### Ice Rink View
```
Height:          600px (desktop), 400px (mobile)
Border Radius:   40px
Background:      #FFFFFF
Red Lines:       #E50036, 2px
Blue Lines:      #0055BB, 2px
Center Circle:   96px diameter
Face-off Dots:   24px diameter
Player Badge:    40px × 40px
```

### Stats Bar
```
Height:          8px
Border Radius:   4px
Background:      rgba(255,255,255,0.1)
Fill:            Linear gradient (team colors)
Label:           12px Inter, uppercase
Animation:       Width transition 500ms ease-out
```

### Timeline Events
```
Item Height:     80px
Icon Size:       40px × 40px
Icon Background: #E50036 (goal), #FCD34D (penalty)
Time Font:       14px Oswald, bold
Border Left:     4px solid #E50036
```

### Player Cards
```
Width:           280px
Height:          420px
Image:           280px × 320px
Padding:         16px
Border Radius:   12px
Hover:           scale(1.02), shadow-xl
```

### Skeleton Loaders
```
Background:      #E5E7EB (light), #1E293B (dark)
Animation:       Pulse 2s infinite
Border Radius:   8px
```

---

## 🎭 **Animations**

### Fade In
```css
@keyframes fadeIn {
  from: opacity 0, translateY(10px)
  to: opacity 1, translateY(0)
}
Duration: 500ms
Easing: ease-out
```

### Slide In (Mobile Menu)
```css
@keyframes slideIn {
  from: translateX(100%)
  to: translateX(0)
}
Duration: 300ms
Easing: ease-out
```

### Ripple Effect
```css
@keyframes ripple {
  from: width 0, height 0, opacity 1
  to: width 100px, height 100px, opacity 0
}
Duration: 600ms
Easing: ease-out
```

### Pulse (Live Indicator)
```css
@keyframes pulse {
  0%, 100%: opacity 1, scale 1
  50%: opacity 0.5, scale 1.2
}
Duration: 2s
Easing: ease-in-out
Repeat: infinite
```

### Scale Hover
```css
Default: scale(1)
Hover: scale(1.05)
Active: scale(0.98)
Duration: 200ms
Easing: ease-out
```

---

## 📏 **Spacing System**

```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
4xl:  96px  (6rem)
```

### Component Spacing
```
Card Padding:         24px
Section Margin:       64px vertical
Grid Gap:             32px
Button Padding:       12px 24px
Input Padding:        12px 16px
```

---

## 🔲 **Border Radius**

```
sm:   4px   (Small buttons, badges)
md:   8px   (Buttons, inputs)
lg:   12px  (Cards)
xl:   16px  (Large cards)
2xl:  24px  (Modals)
full: 9999px (Circular elements)
```

---

## 🌑 **Shadows**

### Elevation Levels
```css
/* Small */
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 
            0 1px 2px rgba(0,0,0,0.06);

/* Medium */
box-shadow: 0 4px 6px rgba(0,0,0,0.1), 
            0 2px 4px rgba(0,0,0,0.06);

/* Large */
box-shadow: 0 10px 15px rgba(0,0,0,0.1), 
            0 4px 6px rgba(0,0,0,0.05);

/* Extra Large */
box-shadow: 0 20px 25px rgba(0,0,0,0.15), 
            0 10px 10px rgba(0,0,0,0.04);
```

---

## 🖼️ **Image Specifications**

### Team Logos
```
Size:      128px × 128px (hero)
           96px × 96px (cards)
           48px × 48px (list items)
           32px × 32px (club bar)
Format:    PNG with transparency
Aspect:    1:1 (square)
```

### Player Photos
```
Size:      280px × 320px
Format:    JPG or WebP
Aspect:    7:8 (portrait)
Quality:   80% compression
```

### News Images
```
Size:      320px × 180px
Format:    JPG or WebP
Aspect:    16:9 (landscape)
Quality:   75% compression
```

---

## 📱 **Responsive Behavior**

### Mobile (< 768px)
```
- Single column layout
- Hero logos: 96px
- Hero score: 48px
- Tabs: Horizontal scroll
- Cards: Full width
- Ice rink: 400px height
- Sidebar: Below main content
- Hamburger menu: Visible
```

### Tablet (768px - 1024px)
```
- 2 column grid (some sections)
- Hero logos: 112px
- Hero score: 60px
- Cards: 2-up grid
- Ice rink: 500px height
- Sidebar: Right column
```

### Desktop (> 1024px)
```
- 12 column grid (8 + 4)
- Hero logos: 128px
- Hero score: 72px
- Cards: 2-3 up grid
- Ice rink: 600px height
- Sidebar: Fixed right
- Full navigation visible
```

---

## 🎯 **Interactive States**

### Button States
```
Default:    opacity 100%, scale 1
Hover:      opacity 100%, scale 1.05
Active:     opacity 90%, scale 0.98
Disabled:   opacity 50%, cursor not-allowed
Focus:      outline 2px #E50036, offset 2px
```

### Link States
```
Default:    color inherit
Hover:      color #E50036, underline
Active:     color darken(#E50036, 10%)
Visited:    color #7C2D3E
```

### Input States
```
Default:    border #E5E7EB, background white
Hover:      border #94A3B8
Focus:      border #E50036, ring 3px rgba(229,0,54,0.1)
Error:      border #EF4444, ring 3px rgba(239,68,68,0.1)
Disabled:   opacity 50%, cursor not-allowed
```

---

## 🔤 **Icon System**

### Library
```
Source: Lucide React
Style: Outline, 2px stroke
Sizes: 16px, 20px, 24px, 32px
```

### Common Icons
```
Menu:           ☰ (24px)
Close:          × (24px)
Globe:          🌐 (16px)
Sun/Moon:       ☀️/🌙 (16px)
Clock:          🕐 (20px)
Play:           ▶️ (20px)
Share:          ↗️ (20px)
Download:       ⬇️ (20px)
Bell:           🔔 (20px)
Trophy:         🏆 (20px)
ChevronDown:    ⌄ (16px)
```

---

## 📐 **Grid Layouts**

### Main Grid
```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 32px;

/* Desktop */
Main Content: span 8
Sidebar: span 4

/* Tablet */
Main Content: span 8
Sidebar: span 4

/* Mobile */
Main Content: span 12
Sidebar: span 12
```

### Card Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 24px;
```

---

## 🎨 **Gradients**

### Hero Background
```css
background: radial-gradient(
  circle at top right,
  rgba(229, 0, 54, 0.2) 0%,
  transparent 50%
),
radial-gradient(
  circle at bottom left,
  rgba(0, 94, 184, 0.2) 0%,
  transparent 50%
);
```

### Button Gradient (Hover)
```css
background: linear-gradient(
  135deg,
  #E50036 0%,
  #C80030 100%
);
```

---

## 🎬 **Transition Timings**

```
Instant:    100ms  (Color changes)
Fast:       200ms  (Hover states)
Normal:     300ms  (Slides, fades)
Slow:       500ms  (Stats bars)
Very Slow:  1000ms (Page transitions)
```

### Easing Functions
```
ease-out:     cubic-bezier(0, 0, 0.2, 1)     - Most common
ease-in:      cubic-bezier(0.4, 0, 1, 1)     - Exits
ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1)   - Full cycle
bounce:       cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

## 📋 **Z-Index Layers**

```
Base Content:        0
Dropdown:            10
Sticky Header:       40
Sticky Mini Score:   40
Sticky Tabs:         40
Sidebar:             30
Modal Backdrop:      50
Modal Content:       60
Mobile Menu:         60
Tooltip:             70
Toast/Alert:         80
```

---

## ✅ **Accessibility**

### Color Contrast (WCAG AA)
```
Text on White:      #242424 (ratio 14:1) ✅
Text on Navy:       #FFFFFF (ratio 16:1) ✅
Buttons:            #FFFFFF on #E50036 (ratio 5.2:1) ✅
```

### Touch Targets
```
Minimum Size: 44px × 44px (iOS guidelines)
Spacing:      8px minimum between targets
```

### Focus Indicators
```
Outline:      2px solid #E50036
Offset:       2px
Radius:       4px
```

---

## 🎁 **Export Settings (for Figma)**

### Components to Create
1. Header Component
2. Hero Component
3. Tab Navigation Component
4. News Card Component
5. Stats Card Component
6. Player Card Component
7. Timeline Item Component
8. Button Component (variants: primary, secondary, icon)
9. Badge Component
10. Input Component
11. Modal Component
12. Skeleton Loader Component

### Auto Layout Settings
```
Spacing: 16px, 24px, 32px (common)
Padding: 16px, 24px
Direction: Horizontal/Vertical
Alignment: Center, Start, End, Space Between
```

### Constraints
```
Cards: Left & Right, Top
Sidebar: Right, Top & Bottom
Header: Left & Right, Top
Footer: Left & Right, Bottom
```

---

## 📞 **Need Help?**

This design system matches the live React app **exactly**. You can:
1. Screenshot the live app for reference
2. Use these specs to rebuild in Figma
3. Create a component library in Figma
4. Share with your design team

**Good luck designing! 🎨✨**

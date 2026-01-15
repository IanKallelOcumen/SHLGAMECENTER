# SHL Game Center - Official Design System 🎨🏒

## 📐 **Typography System**

### **Font Families**

#### **Display/Headings: Bebas Neue**
```css
font-family: 'Bebas Neue', sans-serif;
```
- **Weight**: 400 (Regular) - but appears bold by design
- **Use for**: Headlines, scores, navigation, tabs, player names, stats
- **Characteristics**: Condensed, all-caps friendly, athletic, impactful
- **Letter spacing**: 0.02em (slight tracking for readability)

#### **Body/Content: Inter**
```css
font-family: 'Inter', sans-serif;
```
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold), 900 (Black)
- **Use for**: Body text, descriptions, UI labels, captions
- **Characteristics**: Clean, modern, highly legible on screens

---

### **Typography Scale**

| Element | Font | Size | Weight | Line Height | Usage |
|---------|------|------|--------|-------------|-------|
| **Hero Score** | Bebas Neue | 72px | 400 | 1.0 | Main scoreboard |
| **H1** | Bebas Neue | 48px | 400 | 1.2 | Page titles |
| **H2** | Bebas Neue | 36px | 400 | 1.2 | Section headers |
| **H3** | Bebas Neue | 28px | 400 | 1.3 | Subsection headers |
| **H4** | Bebas Neue | 20px | 400 | 1.3 | Card titles |
| **Body Large** | Inter | 18px | 400 | 1.6 | Intro text, highlights |
| **Body** | Inter | 16px | 400 | 1.5 | Standard text |
| **Body Small** | Inter | 14px | 400 | 1.5 | Secondary text |
| **Caption** | Inter | 12px | 500 | 1.4 | Labels, metadata |
| **Button** | Bebas Neue | 16px | 400 | 1.0 | All buttons |
| **Tab** | Bebas Neue | 14px | 400 | 1.0 | Navigation tabs |

### **Responsive Typography**

```css
/* Mobile (< 768px) */
Hero Score: 48px → 60px
H1: 32px → 48px
H2: 24px → 36px
H3: 20px → 28px

/* Tablet (768px - 1024px) */
Hero Score: 60px
H1: 40px
H2: 30px
H3: 24px

/* Desktop (> 1024px) */
Hero Score: 72px
H1: 48px
H2: 36px
H3: 28px
```

---

## 🎨 **Color System - Official SHL Palette**

### **Primary Brand Colors**

```css
/* SHL Navy - Professional, trustworthy */
--shl-navy: #001F3F;
Use: Headers, navigation, dark backgrounds

/* SHL Blue - Primary action color */
--shl-blue: #0051BA;
Use: Primary buttons, links, active states

/* SHL Blue Dark */
--shl-blue-dark: #003D82;
Use: Hover states, pressed buttons

/* SHL Blue Light */
--shl-blue-light: #3B7DD6;
Use: Highlights, badges (dark theme)

/* SHL Red - Accent & energy */
--shl-red: #E50036;
Use: Live indicators, goals, CTAs, accents

/* SHL Red Dark */
--shl-red-dark: #B8002A;
Use: Hover states for red elements

/* SHL Red Light */
--shl-red-light: #FF1A52;
Use: Bright accents (dark theme)
```

### **Team Accent Colors**

```css
/* Yellow - Energy, caution */
--shl-yellow: #FFD700;
Use: Warnings, penalties, highlights

/* Green - Success, positive stats */
--shl-green: #00A651;
Use: Wins, positive stats, success states

/* Black - Strength, authority */
--shl-black: #1A1A1A;
Use: Strong text, team colors
```

---

### **Light Theme Colors**

```css
/* Backgrounds */
--light-bg: #FFFFFF;              /* Main background */
--light-bg-secondary: #F5F7FA;    /* Subtle background, cards */

/* Text */
--light-text: #1A1A1A;            /* Primary text */
--light-text-secondary: #6B7280;  /* Secondary text, muted */

/* UI Elements */
--light-border: #E5E7EB;          /* Borders, dividers */
--light-card: #FFFFFF;            /* Card backgrounds */
```

### **Dark Theme Colors**

```css
/* Backgrounds */
--dark-bg: #0A0F1C;               /* Main background - deep navy */
--dark-bg-secondary: #151B2D;     /* Card backgrounds */

/* Text */
--dark-text: #FFFFFF;             /* Primary text */
--dark-text-secondary: #94A3B8;   /* Secondary text, muted */

/* UI Elements */
--dark-border: #1E293B;           /* Borders, dividers */
--dark-card: #151B2D;             /* Card backgrounds */
```

---

## 🎯 **Color Usage Guidelines**

### **Do's ✅**

1. **Use Navy for Structure**
   - Navigation bars
   - Headers
   - Footer
   - Tab bars

2. **Use Blue for Actions**
   - Primary buttons
   - Links
   - Interactive elements
   - Active states

3. **Use Red for Emphasis**
   - Live status
   - Goals
   - Important CTAs
   - Accent highlights

4. **Use Greys for Hierarchy**
   - Secondary text
   - Disabled states
   - Subtle backgrounds
   - Borders

5. **Use Team Colors Sparingly**
   - Only for actual team elements
   - Logos
   - Team-specific highlights

### **Don'ts ❌**

1. ❌ Don't use red for errors (use it for emphasis/live states)
2. ❌ Don't mix too many bright colors in one component
3. ❌ Don't use yellow text on white backgrounds (poor contrast)
4. ❌ Don't use pure black (#000) - use SHL Black (#1A1A1A)
5. ❌ Don't use colors that clash with team branding

---

## 📏 **Spacing System**

Based on 8px grid:

```css
/* Spacing Scale */
--space-xs:   4px   (0.25rem)   /* Tight spacing, inline elements */
--space-sm:   8px   (0.5rem)    /* Small gaps */
--space-md:   16px  (1rem)      /* Default spacing */
--space-lg:   24px  (1.5rem)    /* Section spacing */
--space-xl:   32px  (2rem)      /* Large gaps */
--space-2xl:  48px  (3rem)      /* Major sections */
--space-3xl:  64px  (4rem)      /* Page sections */
--space-4xl:  96px  (6rem)      /* Hero sections */
```

### **Component Spacing**

```
Card Padding:       24px (lg)
Section Margin:     64px vertical (3xl)
Grid Gap:           32px (xl)
Button Padding:     12px 24px (vertical: sm+md, horizontal: lg)
Input Padding:      12px 16px
List Item Padding:  16px (md)
```

---

## 🔲 **Border Radius**

```css
--radius-sm:   4px    /* Small elements, badges */
--radius-md:   8px    /* Buttons, inputs */
--radius-lg:   12px   /* Cards, modals */
--radius-xl:   16px   /* Large cards */
--radius-2xl:  24px   /* Hero elements */
--radius-full: 9999px /* Circular (avatars, badges) */
```

---

## 🌑 **Shadows & Depth**

### **Light Theme Shadows**

```css
/* Small - Subtle elevation */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.06);

/* Medium - Cards, dropdowns */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08),
            0 2px 4px rgba(0, 0, 0, 0.06);

/* Large - Modals, popovers */
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12),
            0 4px 8px rgba(0, 0, 0, 0.08);

/* Extra Large - Hero elements */
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1);
```

### **Dark Theme Shadows**

```css
/* Add subtle glow instead of shadows */
box-shadow: 0 4px 12px rgba(0, 81, 186, 0.15),
            0 2px 4px rgba(0, 0, 0, 0.3);
```

---

## 🎭 **Component States**

### **Button States**

```css
/* Default */
background: var(--shl-red);
color: white;
transform: scale(1);
opacity: 1;

/* Hover */
background: var(--shl-red-dark);
transform: scale(1.05);
box-shadow: 0 4px 12px rgba(229, 0, 54, 0.3);

/* Active/Pressed */
transform: scale(0.98);

/* Disabled */
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;

/* Focus */
outline: 2px solid var(--shl-blue);
outline-offset: 2px;
```

### **Interactive States**

```css
/* Link Hover */
color: var(--shl-red);
text-decoration: underline;

/* Card Hover */
transform: translateY(-4px);
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);

/* Tab Active */
color: var(--shl-red);
border-bottom: 4px solid var(--shl-red);

/* Input Focus */
border-color: var(--shl-blue);
box-shadow: 0 0 0 3px rgba(0, 81, 186, 0.1);
```

---

## 📱 **Responsive Breakpoints**

```css
/* Mobile First Approach */

/* Extra Small (Mobile Portrait) */
@media (max-width: 639px) {
  /* 1 column layouts */
  /* Larger touch targets (44px min) */
  /* Simplified navigation */
}

/* Small (Mobile Landscape, Small Tablets) */
@media (min-width: 640px) {
  /* 2 column grids possible */
}

/* Medium (Tablets) */
@media (min-width: 768px) {
  /* 2-3 column layouts */
  /* Side-by-side cards */
}

/* Large (Small Desktops) */
@media (min-width: 1024px) {
  /* Full 12-column grid */
  /* Sidebar visible */
  /* Desktop navigation */
}

/* Extra Large (Large Desktops) */
@media (min-width: 1280px) {
  /* Max-width container: 1280px */
  /* Optimal reading width */
}
```

---

## 🎬 **Animation Guidelines**

### **Timing Functions**

```css
/* Fast - UI feedback */
transition: 150ms ease-out;
Use: Button hovers, icon changes

/* Normal - Standard interactions */
transition: 300ms ease-out;
Use: Card hovers, slides, fades

/* Slow - Major transitions */
transition: 500ms ease-out;
Use: Page transitions, stat bars

/* Bounce - Playful elements */
transition: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
Use: Badges, notifications
```

### **Key Animations**

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide In (Mobile Menu) */
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* Pulse (Live Indicator) */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

/* Ripple (Button Click) */
@keyframes ripple {
  to {
    width: 100px;
    height: 100px;
    opacity: 0;
    margin: -50px;
  }
}
```

---

## 🎯 **Accessibility**

### **Color Contrast**

All text meets WCAG AA standards:

```
✅ Navy (#001F3F) on White: 14.2:1 (AAA)
✅ Black (#1A1A1A) on White: 14.8:1 (AAA)
✅ White on Navy: 14.2:1 (AAA)
✅ White on Blue (#0051BA): 5.8:1 (AA Large)
✅ White on Red (#E50036): 4.9:1 (AA Large)
✅ Grey (#6B7280) on White: 5.2:1 (AA)
```

### **Touch Targets**

```
Minimum: 44px × 44px (iOS/Android guidelines)
Preferred: 48px × 48px
Spacing: 8px minimum between targets
```

### **Focus Indicators**

```css
/* Always visible focus states */
outline: 2px solid var(--shl-blue);
outline-offset: 2px;
border-radius: 4px;
```

---

## 🏗️ **Layout Grid**

### **12-Column Grid**

```css
/* Desktop */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 32px;

Main Content: 8 columns
Sidebar: 4 columns

/* Tablet */
Main Content: 8 columns
Sidebar: 4 columns

/* Mobile */
Main Content: 12 columns (full width)
Sidebar: 12 columns (stacked below)
```

---

## 🧩 **Component Library**

### **Buttons**

```tsx
/* Primary Button */
className="bg-[#E50036] hover:bg-[#B8002A] text-white px-6 py-3 
           rounded-lg font-heading uppercase tracking-wide 
           hover:scale-105 active:scale-98 transition-all"

/* Secondary Button */
className="border-2 border-[#0051BA] text-[#0051BA] px-6 py-3 
           rounded-lg font-heading uppercase tracking-wide 
           hover:bg-[#0051BA] hover:text-white transition-all"

/* Icon Button */
className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
           flex items-center justify-center transition-all"
```

### **Cards**

```tsx
className="bg-white dark:bg-[#151B2D] rounded-xl p-6 
           border border-[#E5E7EB] dark:border-[#1E293B]
           hover:shadow-lg hover:-translate-y-1 
           transition-all duration-300"
```

### **Badges**

```tsx
/* Live Badge */
className="bg-[#E50036] text-white px-3 py-1 rounded-full 
           text-xs font-heading uppercase flex items-center gap-2"

/* Status Badge */
className="bg-[#F5F7FA] dark:bg-[#1E293B] text-[#6B7280] 
           dark:text-[#94A3B8] px-3 py-1 rounded-full text-xs"
```

---

## 📦 **Asset Guidelines**

### **Logos**

```
Hero: 128px × 128px
Cards: 96px × 96px
List: 48px × 48px
Club Bar: 32px × 32px
Format: PNG with transparency
```

### **Player Photos**

```
Size: 280px × 320px
Aspect: 7:8 (portrait)
Format: JPG or WebP
Quality: 80%
```

### **News Images**

```
Size: 640px × 360px
Aspect: 16:9
Format: JPG or WebP
Quality: 75%
```

---

## 🎨 **Design Principles**

1. **Bold & Athletic**: Use Bebas Neue for impact
2. **Clean & Modern**: Maintain generous whitespace
3. **Professional**: Navy + Blue create trust
4. **Energetic**: Red accents add excitement
5. **Accessible**: High contrast, large touch targets
6. **Responsive**: Mobile-first approach
7. **Fast**: Smooth animations, optimized assets
8. **Swedish**: Clean, minimalist aesthetic

---

## 🚀 **Implementation Examples**

### **Hero Section**

```tsx
<div className="bg-gradient-to-br from-[#001F3F] to-[#0051BA] py-24 px-4">
  <div className="flex items-center justify-between max-w-4xl mx-auto">
    <img src={homeLogo} className="w-32 h-32" />
    <div className="text-center">
      <span className="text-[72px] font-heading text-white">3</span>
      <span className="text-2xl text-white/60 mx-4">-</span>
      <span className="text-[72px] font-heading text-white">2</span>
    </div>
    <img src={awayLogo} className="w-32 h-32" />
  </div>
</div>
```

### **Stat Bar**

```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="font-heading uppercase">Shots on Goal</span>
    <span className="font-medium">32 - 28</span>
  </div>
  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
    <div 
      className="h-full bg-gradient-to-r from-[#E50036] to-[#0051BA]"
      style={{ width: '53%' }}
    />
  </div>
</div>
```

---

## ✅ **Quality Checklist**

- [ ] All text uses Bebas Neue (headings) or Inter (body)
- [ ] Primary colors are SHL Navy, Blue, and Red
- [ ] Spacing follows 8px grid system
- [ ] Border radius is consistent (4px, 8px, 12px, 16px)
- [ ] Hover states have 0.3s transitions
- [ ] Focus states have visible outlines
- [ ] Touch targets are minimum 44px
- [ ] Color contrast meets WCAG AA
- [ ] Dark theme uses proper dark colors
- [ ] Mobile breakpoint at 768px works correctly

---

**This design system is your single source of truth. Use it to maintain consistency across all components!** 🎨✨

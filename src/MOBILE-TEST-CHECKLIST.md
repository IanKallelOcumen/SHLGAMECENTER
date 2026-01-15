# 📱 Mobile & Responsive Testing Checklist

## 🎯 **Testing Instructions**

### **Method 1: Browser DevTools**
```bash
1. npm run dev
2. Open http://localhost:5173
3. Press F12 (Chrome/Edge) or Cmd+Option+I (Mac)
4. Click device toolbar icon (Ctrl+Shift+M)
5. Test different device presets
```

### **Method 2: Real Device**
```bash
1. npm run dev -- --host
2. Find your IP: ipconfig (Windows) or ifconfig (Mac/Linux)
3. On phone: http://YOUR_IP:5173
4. Example: http://192.168.1.100:5173
```

---

## 📐 **Breakpoints to Test**

### **Mobile Phone (< 768px)**
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPhone 14 Pro Max (428px)
- Samsung Galaxy S21 (360px)
- Google Pixel 5 (393px)

### **Tablet (768px - 1024px)**
- iPad (768px)
- iPad Air (820px)
- iPad Pro 11" (834px)
- iPad Pro 12.9" (1024px)

### **Desktop (> 1024px)**
- Laptop (1280px)
- Desktop (1440px)
- Large Desktop (1920px)

---

## ✅ **Mobile Phone Tests (< 768px)**

### **Header & Navigation**
- [ ] Club bar is hidden (only shows on tablet+)
- [ ] SHL logo displays correctly (not too large)
- [ ] Hamburger menu icon visible (top right)
- [ ] Language toggle works (EN/SV)
- [ ] Theme toggle works (Dark/Light)
- [ ] Menu icon is easily tappable (44px min)

### **Mobile Menu**
- [ ] Tapping hamburger opens slide-in menu
- [ ] Menu slides in from right
- [ ] Close (X) button works
- [ ] All nav items are listed
- [ ] Nav items are tappable (44px min)
- [ ] Sign In button is visible and tappable
- [ ] Tapping outside closes menu
- [ ] Background blur/overlay visible

### **Hero Section**
- [ ] Team logos display at appropriate size (96px)
- [ ] Score is large and readable (48px font)
- [ ] Live indicator pulses
- [ ] Status badge shows correctly
- [ ] Team names stack vertically or wrap properly
- [ ] Gradient background displays correctly
- [ ] No horizontal scrolling

### **Tabs**
- [ ] Tabs scroll horizontally
- [ ] Active tab highlighted in red
- [ ] All tabs are tappable (44px min)
- [ ] Smooth scrolling
- [ ] No awkward wrapping

### **Main Content**
- [ ] Single column layout
- [ ] Cards full width
- [ ] News carousel swipes smoothly
- [ ] Images load properly
- [ ] Text is readable (not too small)
- [ ] No horizontal overflow

### **Footer**
- [ ] Sponsors display in 1-2 columns
- [ ] Sponsor logos are visible and sized well
- [ ] Footer navigation stacks vertically (1 column)
- [ ] All links are tappable
- [ ] Social icons visible
- [ ] Copyright text readable

### **Touch Interactions**
- [ ] Buttons respond to touch (44px min)
- [ ] No double-tap zoom on buttons
- [ ] Tap highlight color visible (red tint)
- [ ] Smooth scrolling (no jank)
- [ ] Cards can be tapped/clicked
- [ ] Links work properly

### **Sticky Elements**
- [ ] Header stays sticky at top
- [ ] Tabs stay sticky below header
- [ ] Mini score appears when scrolling down (400px)
- [ ] Mini score shows team logos and score
- [ ] Mini score is readable and compact

---

## ✅ **Tablet Tests (768px - 1024px)**

### **Header & Navigation**
- [ ] Club bar is VISIBLE
- [ ] Club bar scrolls infinitely
- [ ] Pause on hover (if using mouse)
- [ ] SHL logo displays properly
- [ ] Desktop nav visible on larger tablets (> 1024px)
- [ ] Hamburger menu on smaller tablets (< 1024px)

### **Layout**
- [ ] 2-column grid for cards
- [ ] Sidebar appears on right (if > 1024px)
- [ ] Proper spacing (2rem padding)
- [ ] No cramped content
- [ ] Hero section well-proportioned

### **Typography**
- [ ] Headlines are 2.5rem (tablet size)
- [ ] Body text is readable
- [ ] No awkward line breaks

### **Footer**
- [ ] 2-3 column layout for navigation
- [ ] Sponsors in 2-3 columns
- [ ] Spacing looks good
- [ ] Links easily tappable

---

## ✅ **Desktop Tests (> 1024px)**

### **Header & Navigation**
- [ ] Club bar scrolls infinitely
- [ ] Hover on team logos removes grayscale
- [ ] Full desktop navigation visible
- [ ] Sign In button visible
- [ ] Language and theme toggles work
- [ ] Nav items hover effect (red background)

### **Layout**
- [ ] 12-column grid (8 main + 4 sidebar)
- [ ] Sidebar visible on right
- [ ] Proper spacing (3-4rem padding)
- [ ] Content max-width 1280px
- [ ] Centered layout

### **Hero**
- [ ] Team logos 128px
- [ ] Score 72px (extra large)
- [ ] Team names side-by-side
- [ ] Gradient background looks good
- [ ] All metadata visible

### **Footer**
- [ ] 5-column layout for navigation
- [ ] Sponsors in 2 rows
- [ ] All sections visible side-by-side
- [ ] Hover effects work
- [ ] Links change color on hover

---

## ✅ **Cross-Browser Tests**

### **Chrome (Desktop & Mobile)**
- [ ] All features work
- [ ] Animations smooth
- [ ] Colors correct

### **Safari (Desktop & iOS)**
- [ ] iOS safe area respected
- [ ] Fonts load correctly
- [ ] Animations work
- [ ] Touch interactions smooth

### **Firefox**
- [ ] Layout renders correctly
- [ ] Animations work
- [ ] Colors match

### **Edge**
- [ ] No layout issues
- [ ] Features functional

### **Samsung Internet (Android)**
- [ ] Touch interactions work
- [ ] Fonts render well
- [ ] Animations smooth

---

## ✅ **Specific Component Tests**

### **Infinite Scrolling Club Bar**
- [ ] Desktop: Visible and scrolling
- [ ] Tablet: Visible and scrolling
- [ ] Mobile: Hidden
- [ ] Pause on hover works
- [ ] All 14 teams visible
- [ ] Logos load correctly
- [ ] No jarring jump at loop point

### **Footer with Sponsors**
- [ ] All 11 sponsor logos visible
- [ ] Huvudpartner section shows 5 sponsors
- [ ] Officiell Partner section shows 6 sponsors
- [ ] Grayscale → color on hover
- [ ] All sponsor links work (open in new tab)
- [ ] Footer navigation has 5 sections
- [ ] All footer links work (open in new tab)
- [ ] Social icons clickable
- [ ] Copyright shows current year

### **Sticky Mini Score**
- [ ] Appears after scrolling 400px
- [ ] Shows on all breakpoints
- [ ] Displays team logos (32px)
- [ ] Shows current score
- [ ] Live indicator if live
- [ ] Smooth slide-down animation
- [ ] Doesn't overlap with header

### **News Carousel**
- [ ] Auto-scrolls every 5 seconds
- [ ] Pause on hover
- [ ] Swipe works on mobile
- [ ] Cards display properly
- [ ] Images load
- [ ] Read More buttons work

---

## ✅ **Performance Tests**

### **Load Time**
- [ ] Page loads in < 3 seconds
- [ ] Fonts load quickly
- [ ] Images don't block rendering
- [ ] No layout shift

### **Animations**
- [ ] 60fps smooth animations
- [ ] No jank or stuttering
- [ ] Infinite scroll is smooth
- [ ] Carousel transitions smooth

### **Touch Response**
- [ ] Buttons respond immediately
- [ ] No delay on touch
- [ ] Scroll is smooth
- [ ] No laggy interactions

---

## ✅ **Accessibility Tests**

### **Touch Targets**
- [ ] All buttons minimum 44px × 44px
- [ ] Proper spacing between targets
- [ ] Easy to tap on phone

### **Color Contrast**
- [ ] Text readable on backgrounds
- [ ] Meets WCAG AA standards
- [ ] Dark mode has good contrast
- [ ] Light mode has good contrast

### **Focus States**
- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Logical tab order

---

## ✅ **Language & Theme Tests**

### **Language Switching (EN/SV)**
- [ ] Toggle works on all breakpoints
- [ ] All text changes
- [ ] Footer translates
- [ ] No layout breaks
- [ ] Preference saved to localStorage

### **Theme Switching (Light/Dark)**
- [ ] Toggle works on all breakpoints
- [ ] All colors change
- [ ] Sponsors section adapts
- [ ] Footer adapts
- [ ] No flash of wrong theme
- [ ] Preference saved to localStorage

---

## 🐛 **Common Issues to Check**

### **Mobile**
- [ ] No horizontal scrolling
- [ ] Text not too small to read
- [ ] Buttons easy to tap
- [ ] No overlapping elements
- [ ] Cards not cramped
- [ ] Images sized properly

### **Tablet**
- [ ] No awkward gaps
- [ ] Proper column layout
- [ ] Club bar visible
- [ ] Sidebar appears at right breakpoint

### **Desktop**
- [ ] Content not too wide
- [ ] Proper max-width (1280px)
- [ ] Hover states work
- [ ] Navigation visible
- [ ] Sidebar always visible

---

## 📊 **Test Results Template**

### **Device:** [e.g., iPhone 14, iPad Air, Desktop Chrome]
### **Viewport:** [e.g., 390px × 844px]
### **Browser:** [e.g., Safari iOS 17]

**Club Bar:**
- [ ] Pass / ❌ Fail - [Notes]

**Header/Nav:**
- [ ] Pass / ❌ Fail - [Notes]

**Hero:**
- [ ] Pass / ❌ Fail - [Notes]

**Tabs:**
- [ ] Pass / ❌ Fail - [Notes]

**Content:**
- [ ] Pass / ❌ Fail - [Notes]

**Footer:**
- [ ] Pass / ❌ Fail - [Notes]

**Sponsors:**
- [ ] Pass / ❌ Fail - [Notes]

**Overall:**
- [ ] Pass / ❌ Fail - [Notes]

---

## 🎯 **Priority Issues**

### **Critical (Must Fix)**
- Horizontal scrolling on mobile
- Buttons too small to tap
- Text unreadable
- Features completely broken
- Layout severely broken

### **High (Should Fix)**
- Awkward spacing
- Minor layout issues
- Hover states not working
- Some animations janky

### **Medium (Nice to Fix)**
- Minor visual inconsistencies
- Slight spacing issues
- Small typography adjustments

### **Low (Can Wait)**
- Very minor visual tweaks
- Edge case issues
- Optional enhancements

---

## ✅ **Final Checklist**

Before considering testing complete:

- [ ] Tested on real iPhone
- [ ] Tested on real Android
- [ ] Tested on real iPad
- [ ] Tested on desktop (1920px)
- [ ] Tested on laptop (1280px)
- [ ] Tested in Chrome
- [ ] Tested in Safari
- [ ] Tested in Firefox
- [ ] Tested in Edge
- [ ] Infinite club bar works perfectly
- [ ] Footer displays properly on all screens
- [ ] All 11 sponsors visible and clickable
- [ ] All footer links work
- [ ] Touch targets meet 44px minimum
- [ ] No horizontal scrolling anywhere
- [ ] Language switching works
- [ ] Theme switching works
- [ ] Performance is smooth (60fps)
- [ ] No console errors

---

## 🎉 **Success Criteria**

Your app passes if:
1. ✅ All features work on all breakpoints
2. ✅ No horizontal scrolling on any device
3. ✅ Touch targets are easily tappable
4. ✅ Typography is readable
5. ✅ Colors and themes work properly
6. ✅ Animations are smooth (60fps)
7. ✅ Footer and sponsors display correctly
8. ✅ Club bar scrolls infinitely on desktop/tablet
9. ✅ All links are clickable
10. ✅ Performance is good (< 3s load)

---

## 📞 **Need Help?**

If you find issues:
1. Note the device and viewport size
2. Take a screenshot
3. Describe the expected vs actual behavior
4. Check console for errors

**Happy Testing!** 🚀📱💻

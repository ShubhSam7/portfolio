# Quick Customization Reference

## 🎨 Color Palette

Your portfolio uses the following color scheme (from your design inspiration):

### Primary Colors
```css
--color-yellow: #FDBD25    /* Warm yellow accent */
--color-orange: #FF8426    /* Primary orange */
```

### Neutral Colors
```css
--color-light-gray: #E7F7F7  /* Light background */
--color-gray: #929292        /* Secondary text */
--color-black: #010101       /* Primary text */
--color-white: #ffffff       /* White */
```

### Gradient
```css
--gradient-warm: linear-gradient(135deg, #FDBD25 0%, #FF8426 100%)
```

### Usage in Tailwind
```jsx
// Using CSS variables
className="bg-[var(--color-orange)]"
className="text-[var(--color-yellow)]"

// In gradients
className="bg-gradient-to-r from-[var(--color-yellow)] to-[var(--color-orange)]"
```

---

## 📝 File Locations Quick Reference

### 🎯 Your Information

| What to Update | File | Line |
|---------------|------|------|
| Your Name | `components/sections/Hero.tsx` | 37 |
| Your Name (Footer) | `components/sections/Footer.tsx` | 30 |
| Page Title | `app/layout.tsx` | 24 |
| Roles/Titles | `components/sections/Hero.tsx` | 9-14 |
| About Description | `components/sections/Hero.tsx` | 51-54 |

### 📧 Contact Info

| Platform | File | Line |
|----------|------|------|
| Email | `components/sections/Contact.tsx` | 51 |
| LinkedIn | `components/sections/Contact.tsx` | 62 |
| GitHub | `components/sections/Contact.tsx` | 77 |
| Twitter | `components/sections/Contact.tsx` | 92 |

### 🚀 Projects

| What | File | Line |
|------|------|------|
| Project Data | `components/sections/Projects.tsx` | 17-40 |
| GitHub Link | `components/sections/Projects.tsx` | 138, 159 |

### 💻 Tech Stack

| What | File | Line |
|------|------|------|
| Technologies Array | `components/sections/TechStack.tsx` | 8-17 |

---

## 🖼️ Adding Images

### Project Images

1. Create the folder:
```bash
mkdir public/projects
```

2. Add your images (recommended size: 1200x800px)

3. Update in `components/sections/Projects.tsx`:
```javascript
imageUrl: '/projects/your-project.png'
```

### Image Optimization Tips

**Recommended formats:**
- Use WebP for photos
- Use PNG for screenshots with transparency
- Use SVG for logos and icons

**Optimization tools:**
- [TinyPNG](https://tinypng.com/) - Online compression
- [Squoosh](https://squoosh.app/) - Advanced online tool
- Sharp (CLI) - `pnpm install -D sharp`

---

## 🎭 Fonts

### Current Fonts

1. **IBM Plex Mono** (Body text)
   - Already configured via Google Fonts
   - Used for: Body text, paragraphs

2. **Bebas Neue** (Headings)
   - Already configured via Google Fonts
   - Used for: H1, H2, H3, etc.

3. **Anton** (Display)
   - Already configured via Google Fonts
   - Used for: Special display text

4. **Overused Grotesk** (Custom)
   - ⚠️ Need to add manually
   - Place `OverusedGrotesk-VF.woff2` in `public/fonts/`
   - Use with class: `font-grotesk`

### Font Classes

```jsx
// Default (IBM Plex Mono)
<p>Regular text</p>

// Heading (Bebas Neue)
<h1>Heading</h1>

// Display (Anton)
<div className="font-display">Special Text</div>

// Grotesk (Custom)
<div className="font-grotesk">Custom Font</div>
```

---

## 🎬 Animation Components

### ClickSpark
Click animation with sparks
```jsx
import { ClickSpark } from '@/components/ui/ClickSpark';

<ClickSpark>
  <button>Click Me</button>
</ClickSpark>
```

### RotatingText
Text that rotates through array
```jsx
import { RotatingText } from '@/components/ui/RotatingText';

<RotatingText
  texts={['Developer', 'Designer', 'Creator']}
  interval={2500}
/>
```

### StarBorder
Animated button with star effects
```jsx
import { StarBorder } from '@/components/ui/StarBorder';

<StarBorder href="https://github.com/username">
  GitHub
</StarBorder>
```

### LogoLoop
Infinite scrolling carousel
```jsx
import { LogoLoop } from '@/components/ui/LogoLoop';

<LogoLoop
  logos={[
    { name: 'React', icon: <ReactIcon /> }
  ]}
  speed={30}
/>
```

### Carousel
Project showcase carousel
```jsx
import { Carousel } from '@/components/ui/Carousel';

<Carousel
  items={[<div>Slide 1</div>, <div>Slide 2</div>]}
  autoPlay={true}
  interval={6000}
/>
```

### PillNav
Animated navigation
```jsx
import { PillNav } from '@/components/ui/PillNav';

<PillNav
  items={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' }
  ]}
/>
```

---

## 📦 Adding New Sections

### Step 1: Create Component
Create `components/sections/YourSection.tsx`:

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const YourSection = () => {
  return (
    <section id="your-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center mb-12"
        >
          Your Section Title
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  );
};
```

### Step 2: Add to Page
Update `app/page.tsx`:

```tsx
import { YourSection } from '@/components/sections/YourSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <YourSection /> {/* Add here */}
        <TechStack />
        {/* ... */}
      </main>
      <Footer />
    </div>
  );
}
```

### Step 3: Update Navigation
Update `components/sections/Header.tsx`:

```tsx
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Your Section', href: '#your-section' }, // Add here
  { label: 'Tech Stack', href: '#tech-stack' },
  // ...
];
```

---

## 🔧 Common Customizations

### Change Background Colors

```jsx
// Section backgrounds
className="bg-white"                    // White background
className="bg-[var(--color-light-gray)]"  // Light gray
className="bg-gradient-to-b from-white to-[var(--color-light-gray)]"  // Gradient
```

### Change Text Colors

```jsx
className="text-[var(--color-black)]"   // Primary text
className="text-[var(--color-gray)]"    // Secondary text
className="text-[var(--color-orange)]"  // Accent text
```

### Change Button Styles

```jsx
// Primary button
className="px-8 py-4 bg-gradient-to-r from-[var(--color-yellow)] to-[var(--color-orange)] text-white rounded-full"

// Outlined button
className="px-8 py-4 border-2 border-[var(--color-orange)] text-[var(--color-orange)] rounded-full"
```

### Adjust Spacing

```jsx
className="py-24"    // Vertical padding (sections)
className="px-6"     // Horizontal padding (content)
className="mb-12"    // Margin bottom
className="gap-6"    // Gap between flex/grid items
```

---

## 🎯 Animation Timing

Default animation settings used:

```javascript
// Fade in from bottom
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Fade in from left
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}

// Scale up
initial={{ scale: 0.8 }}
whileInView={{ scale: 1 }}
transition={{ duration: 0.4 }}

// Hover effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

Adjust `duration` to make animations faster (lower value) or slower (higher value).

---

## 🎨 Responsive Breakpoints

Tailwind CSS breakpoints used:

```jsx
// Mobile first approach
className="text-base"           // All screens
className="md:text-lg"          // ≥768px
className="lg:text-xl"          // ≥1024px

// Common patterns
className="flex flex-col md:flex-row"        // Stack on mobile, row on desktop
className="grid grid-cols-1 md:grid-cols-2"  // 1 column mobile, 2 on desktop
className="text-4xl md:text-6xl"             // Smaller text on mobile
```

---

## 💡 Pro Tips

1. **Keep it Simple**: Don't overuse animations
2. **Test Mobile First**: Most users will view on mobile
3. **Optimize Images**: Use WebP format and lazy loading
4. **Consistent Spacing**: Use the same spacing throughout (py-24, mb-12, etc.)
5. **Color Consistency**: Stick to your color palette
6. **Fast Load Times**: Aim for < 3 seconds
7. **Accessibility**: Always include alt text for images
8. **Content First**: Make sure content is easy to read and understand

---

## 📱 Testing Checklist

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Mobile (iOS)
- [ ] Test on Mobile (Android)
- [ ] Test form submission
- [ ] Test all links
- [ ] Test animations
- [ ] Test with slow 3G
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit
- [ ] Check console for errors

---

Need help? Check [SETUP.md](SETUP.md) for detailed setup instructions or [TODO.md](TODO.md) for the complete checklist!

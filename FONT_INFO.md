# Font Information - NotBear.co Inspiration

## Current Font Setup

Your portfolio currently uses **Poppins** font family, which is a clean, modern sans-serif font that works well for portfolios.

## NotBear.co Font Analysis

NotBear.co likely uses custom fonts similar to:

- **Overused Grotesk** (or similar grotesque sans-serif)
- **Inter** or **Basier Circle** (for body text)

These fonts have:

- ✅ Clean, modern appearance
- ✅ Excellent readability
- ✅ Professional yet friendly feel
- ✅ Strong geometric shapes

## How to Find NotBear.co's Exact Font

1. **Manual Inspection:**

   - Visit notbear.co
   - Right-click on any text → "Inspect Element"
   - Look at the "Computed" tab in DevTools
   - Check the `font-family` property

2. **Browser Extension:**
   - Install "WhatFont" extension for Chrome/Firefox
   - Click the extension and hover over text on notbear.co
   - It will show you the exact font name

## Recommended Alternative Fonts

If you want to match NotBear.co's aesthetic:

### Option 1: Overused Grotesk (Premium)

```css
@font-face {
  font-family: "Overused Grotesk";
  src: url("/fonts/OverusedGrotesk-VF.woff2") format("woff2-variations");
  font-weight: 300 900;
}
```

### Option 2: Inter (Free - Google Fonts)

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
```

### Option 3: DM Sans (Free - Google Fonts)

```tsx
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

### Option 4: Space Grotesk (Free - Google Fonts)

```tsx
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
```

## Current Implementation

Your site is already set up with Poppins, which is very similar in style and quality. The key differences with NotBear.co are likely:

- Font weight usage (they might use bolder weights)
- Letter spacing
- Line height adjustments

## Next Steps

1. **Visit notbear.co and inspect their fonts**
2. **If you want the exact font:**
   - Purchase the font if it's premium
   - Add the font files to `/public/fonts/`
   - Update `app/layout.tsx` and `app/globals.css`
3. **Or stick with Poppins** - it's already a great choice!

## Your Current Font is Great! ✅

Poppins is:

- ✅ Clean and modern
- ✅ Excellent readability
- ✅ Free and easy to use
- ✅ Very similar to high-end portfolio fonts
- ✅ Professional appearance

**Unless you have specific branding requirements, Poppins is already an excellent choice for your portfolio!**

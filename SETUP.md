# Portfolio Website Setup Guide

## 🎨 Your Modern Portfolio Website

A beautiful, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, following the design inspiration from NotBear.Co.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm package manager

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Personal Information

#### Update Hero Section
Edit `components/sections/Hero.tsx`:
- Line 9-14: Change the roles array to your roles
- Line 37: Replace "Your Name" with your actual name
- Line 51-54: Update the description

#### Update Layout Metadata
Edit `app/layout.tsx`:
- Line 24: Change the title
- Line 25: Update the description

### 2. Tech Stack

Edit `components/sections/TechStack.tsx`:
- Lines 8-17: Update the `technologies` array with your tech stack
- Replace emoji icons with actual SVG logos for better appearance
- You can add/remove technologies as needed

**How to add SVG icons:**
1. Get SVG icons from [Simple Icons](https://simpleicons.org/)
2. Create components in `components/ui/icons/`
3. Replace emoji icons with your SVG components

### 3. Projects

Edit `components/sections/Projects.tsx`:
- Lines 17-40: Update the `projects` array with your actual projects
- For each project, add:
  - `title`: Project name
  - `description`: Brief description
  - `tags`: Technologies used
  - `githubUrl`: GitHub repository link
  - `liveUrl`: Live demo link
  - `imageUrl`: Project screenshot path

**Adding Project Images:**
1. Add images to `public/projects/`
2. Update `imageUrl` in the projects array: `imageUrl: '/projects/your-image.png'`

### 4. Contact Information

Edit `components/sections/Contact.tsx`:
- Line 51: Update email address
- Line 62-67: Update LinkedIn URL and profile
- Line 77-82: Update GitHub username
- Line 92-97: Update Twitter handle

Edit `components/sections/Footer.tsx`:
- Line 13-16: Update social links array with your URLs
- Line 30: Update your name in the footer

### 5. Colors (Already Set)

The color palette from your design is already configured in `app/globals.css`:
- Yellow: `#FDBD25`
- Orange: `#FF8426`
- Light Gray: `#E7F7F7`
- Gray: `#929292`
- Black: `#010101`

To modify colors, edit the CSS variables in `app/globals.css` (lines 5-10).

### 6. Fonts

The fonts are configured in `app/layout.tsx`:
- IBM Plex Mono (body text)
- Bebas Neue (headings)
- Anton (display text)

**Adding Overused Grotesk font:**
1. Download the `OverusedGrotesk-VF.woff2` font file
2. Place it in `public/fonts/`
3. The font-face is already declared in `globals.css` (line 33-36)
4. Use it with class `font-grotesk`

### 7. Navigation

Edit `components/sections/Header.tsx`:
- Lines 6-9: Update navigation items if you add/remove sections

## 🎯 Adding New Sections

1. Create a new component in `components/sections/YourSection.tsx`
2. Import it in `app/page.tsx`
3. Add it to the main render
4. Update the navigation in `components/sections/Header.tsx`

## 📦 Components Overview

### UI Components
- `ClickSpark`: Click animation with sparks
- `RotatingText`: Text that rotates through array of strings
- `StarBorder`: Animated button with star effects
- `LogoLoop`: Infinite scrolling logo carousel
- `PillNav`: Animated pill-style navigation
- `Carousel`: Project showcase carousel

### Section Components
- `Hero`: Landing section with intro
- `TechStack`: Display technologies you work with
- `Projects`: Showcase your projects
- `Contact`: Contact form and social links
- `Footer`: Site footer with links

## 🚀 Deployment to Vercel

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Import your repository

4. Configure:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`

5. Deploy!

## 🎨 Enhancement Suggestions (Before Deployment)

### Must-Do:
1. ✅ Replace "Your Name" with your actual name everywhere
2. ✅ Add real project images to `public/projects/`
3. ✅ Update all social media links
4. ✅ Add actual project details
5. ✅ Replace tech stack emojis with SVG icons
6. ✅ Add the Overused Grotesk font file

### Nice-to-Have:
1. 🎯 Add a blog section
2. 🎯 Implement the contact form backend (using services like Formspree, EmailJS, or API routes)
3. 🎯 Add loading animations
4. 🎯 Implement dark mode toggle
5. 🎯 Add analytics (Google Analytics, Vercel Analytics)
6. 🎯 Add SEO optimization with next-seo
7. 🎯 Create an About section with your story
8. 🎯 Add testimonials/recommendations section
9. 🎯 Implement smooth page transitions
10. 🎯 Add accessibility improvements (ARIA labels, keyboard navigation)

### Advanced Enhancements:
1. 🚀 Add a CMS (like Sanity or Contentful) for easy content management
2. 🚀 Implement MDX for blog posts
3. 🚀 Add 3D elements with Three.js or React Three Fiber
4. 🚀 Create case studies for each project
5. 🚀 Add resume/CV download functionality
6. 🚀 Implement i18n for multiple languages
7. 🚀 Add performance monitoring
8. 🚀 Create an admin panel for content updates

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1920px+)

## 🔧 Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📄 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles & color palette
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── ClickSpark.tsx
│   │   ├── RotatingText.tsx
│   │   ├── StarBorder.tsx
│   │   ├── LogoLoop.tsx
│   │   ├── PillNav.tsx
│   │   └── Carousel.tsx
│   └── sections/           # Page sections
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── TechStack.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
│   ├── fonts/             # Custom fonts (add OverusedGrotesk here)
│   └── projects/          # Project images
└── package.json
```

## 🎨 Design Credits

This portfolio is inspired by the beautiful design work at [NotBear.Co](https://www.behance.net/gallery/234184811/NotBearCo-Website-Design-and-Development).

## 💡 Tips

1. **Images**: Optimize images before adding them (use tools like TinyPNG or Sharp)
2. **Performance**: Keep animations smooth by using `will-change` CSS property sparingly
3. **SEO**: Add meta tags, Open Graph tags, and structured data
4. **Testing**: Test on multiple devices and browsers before deployment
5. **Content**: Keep descriptions concise and impactful

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`

### Font Not Loading
- Ensure font files are in `public/fonts/`
- Check font-face declaration in `globals.css`
- Verify font file format (woff2 recommended)

### Animations Not Working
- Ensure Framer Motion is installed: `pnpm install framer-motion`
- Check console for errors
- Verify 'use client' directive is present in component files

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Verify all dependencies are installed
3. Ensure you're using Node.js 18+
4. Check that all file paths are correct

---

**Happy Coding! 🚀**

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion

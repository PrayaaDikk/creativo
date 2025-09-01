# 🎨 Creativo - Design & Innovation Agency

A modern, responsive website for a creative design agency built with Next.js, TypeScript, and Tailwind CSS. Features a sleek design with smooth animations, mobile-first responsive design, and interactive navigation.

## ✨ Features

### 🚀 **Core Functionality**
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Smooth Scrolling**: Automatic section navigation with header offset
- **Interactive Navigation**: Active state tracking and visual feedback
- **Mobile Menu**: Slide-out mobile navigation with smooth transitions
- **Performance Optimized**: Responsive images and lazy loading

### 🎯 **Navigation System**
- **Sticky Header**: Fixed navigation that stays visible while scrolling
- **Active Section Tracking**: Visual feedback showing current section
- **Smooth Scrolling**: Animated navigation between sections
- **Mobile & Desktop**: Optimized navigation for all screen sizes

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Breakpoint System**: Responsive layouts using Tailwind CSS
- **Touch-Friendly**: Mobile-optimized interactions and gestures
- **Cross-Platform**: Consistent experience across all devices

### 🖼️ **Image Optimization**
- **Responsive Images**: Automatic image size selection based on screen width
- **WebP Format**: Modern image format for better performance
- **Lazy Loading**: Images load only when needed
- **Multiple Sizes**: Small images for mobile, full-size for desktop

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: SVG icons and custom graphics
- **Images**: Next.js Image component with optimization
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
creativo/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── header/           # Header components
│   │   │   ├── desktop-nav.tsx
│   │   │   ├── mobile-menu-button.tsx
│   │   │   ├── mobile-menu-overlay.tsx
│   │   │   └── index.ts
│   │   ├── hero-section.tsx   # Hero section
│   │   ├── services-section.tsx # Services section
│   │   ├── portfolio-section.tsx # Portfolio section
│   │   ├── collaboration-section.tsx # Collaboration section
│   │   ├── footer.tsx         # Footer
│   │   └── ui/               # UI components
│   │       ├── button.tsx     # Button component
│   │       └── responsive-image.tsx # Responsive image component
│   ├── constants/             # App constants
│   │   └── index.ts          # Services, footer data, social media
│   └── lib/                  # Utility functions
│       └── utils.ts          # Helper functions
├── public/                   # Static assets
│   ├── images/              # Images and graphics
│   │   ├── portfolio-*.webp # Portfolio images
│   │   ├── portfolio-*-small.webp # Mobile portfolio images
│   │   └── svg/             # SVG graphics
│   └── icons/               # Icon assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrayaaDIkk/creativo.git
   cd creativo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors & Themes
The project uses CSS custom properties for theming. Main colors are defined in Tailwind config:

```css
/* Primary theme colors */
--blueTheme: #2563eb
--grayTheme: #6b7280
--light: #f8fafc
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add an `id` attribute to the section
3. Update the navigation arrays in `src/constants/index.ts`
4. Import and add to `src/app/page.tsx`

### Responsive Images
Use the `ResponsiveImage` component for automatic mobile/desktop image selection:

```tsx
import ResponsiveImage from "@/components/ui/responsive-image";

<ResponsiveImage
  src="/images/your-image.webp"
  smallSrc="/images/your-image-small.webp"
  alt="Description"
  width={400}
  height={300}
/>
```

## 📱 Component Documentation

### Header Component
The header is modular and consists of several components:

#### DesktopNav
- **Props**: `scrollToSection`, `getMenuTextColor`
- **Responsibility**: Desktop navigation menu with active states

#### MobileMenuButton
- **Props**: `isOpen`, `onClick`
- **Responsibility**: Mobile hamburger menu toggle button

#### MobileMenuOverlay
- **Props**: `isOpen`, `onClose`, `onMenuClick`, `scrollToSection`, `getMenuTextColor`
- **Responsibility**: Full mobile menu overlay with navigation

### ResponsiveImage Component
Automatically selects between small and regular images based on screen width:

```tsx
interface ResponsiveImageProps {
  src: string;           // Desktop image path
  smallSrc: string;      // Mobile image path
  alt: string;           // Alt text
  width: number;         // Image width
  height: number;        // Image height
  className?: string;    // Custom CSS classes
  priority?: boolean;    // Loading priority
  loading?: "lazy" | "eager";
  sizes?: string;        // Responsive sizing hints
}
```

## 🎯 Key Features Explained

### Smooth Scrolling Navigation
The navigation system automatically:
- Calculates header height for proper offset
- Provides smooth scrolling animation
- Updates active section based on scroll position
- Handles both mobile and desktop navigation

### Mobile Menu System
- **Slide Animation**: Smooth slide-in from right
- **Backdrop**: Semi-transparent overlay
- **Auto-Close**: Closes when menu items are clicked
- **Responsive**: Adapts to different screen sizes

### Active State Management
- **Real-time Updates**: Active section updates as user scrolls
- **Visual Feedback**: Active items show in blue theme color
- **Consistent Styling**: Same logic for mobile and desktop

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy with automatic builds

### Other Platforms
The project is compatible with any hosting platform that supports Node.js applications.

---

**Author** - Fadil Prayadika

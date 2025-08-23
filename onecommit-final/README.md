# OneCommit Website

A modern, responsive website for OneCommit - an AI-powered recruiting platform for high school track & field athletes.

## Overview

OneCommit helps under-recruited high school athletes take control of their recruiting journey through:
- Smart school matching based on athletic performance and academic profile
- Direct coach outreach using authentic email communication
- Real-time analytics to track coach engagement and interest

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **Professional Branding**: Custom green and black color scheme
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Comprehensive Content**: Detailed sections covering all aspects of the platform

## Website Sections

1. **Hero Section**: Main value proposition with call-to-action
2. **How It Works**: Three-step process explanation
3. **Problem/Solution**: Comparison of current recruiting challenges vs OneCommit benefits
4. **Features**: Detailed feature breakdown with icons
5. **Competitive Comparison**: Table comparing OneCommit to competitors
6. **Pricing**: Transparent pricing model with three tiers
7. **About/Founder Story**: Personal narrative behind the platform
8. **Trust & Security**: Security, compliance, and privacy information
9. **Call-to-Action**: Final conversion section
10. **Footer**: Navigation and company information

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom OneCommit branding
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Build Tool**: Vite for fast development and optimized builds

## Getting Started

### Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm run dev
   ```

3. Open http://localhost:5173 in your browser

### Production Build

1. Build for production:
   ```bash
   pnpm run build
   ```

2. The built files will be in the `dist/` directory

### Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## File Structure

```
onecommit-website/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── images/        # Generated images and icons
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── App.jsx            # Main application component
│   ├── App.css            # Custom styles and branding
│   └── main.jsx           # Application entry point
├── dist/                  # Production build output
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Customization

### Brand Colors
The OneCommit brand colors are defined in `src/App.css`:
- Primary Green: `oklch(0.55 0.15 160)`
- Black: Used for text and accents
- White: Background and contrast

### Content Updates
All content is contained in `src/App.jsx` and can be easily updated:
- Hero messaging
- Feature descriptions
- Pricing information
- Company story

### Images
Custom images are stored in `src/assets/images/`:
- `hero_image.jpg`: Main hero section image
- `school_matching_icon.png`: School matching feature icon
- `email_outreach_icon.png`: Email outreach feature icon
- `analytics_dashboard_icon.png`: Analytics feature icon

## Performance

The website is optimized for performance:
- Lazy loading of images
- Optimized bundle size with Vite
- Responsive images for different screen sizes
- Minimal JavaScript for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This website was created for OneCommit. All rights reserved.

## Contact

For questions about this website implementation, please contact the development team.


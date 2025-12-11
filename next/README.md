# ValuStrat Next.js Application

The main ValuStrat website built with Next.js 15.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
next/
├── app/              # Next.js App Router
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   ├── about/       # About page
│   ├── blog/        # Blog page
│   ├── careers/     # Careers page
│   ├── case-studies/
│   ├── contact/     # Contact page
│   ├── industries/  
│   └── services/    # Services page
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── public/          # Static files
└── styles/          # Global styles
```

## Technologies

- Next.js 15.5.7
- React 19
- TypeScript 5
- Framer Motion 11
- CSS Modules

## Key Features

- Server-side rendering (SSR)
- Static site generation (SSG)
- Optimized images and fonts
- Smooth animations
- Responsive design
- SEO optimized
- Performance optimized

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create `.env.local` for environment variables:

```env
# Add your environment variables
NEXT_PUBLIC_API_URL=
```

## Deployment

This app is configured for Vercel deployment. The parent directory contains `vercel.json` with the correct configuration.

For manual deployment:
1. Run `npm run build` to create production build
2. Deploy the `.next` folder to your hosting provider

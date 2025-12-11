# ValuStrat - Business Technology Solutions

A modern, high-performance website built with Next.js and React, featuring smooth animations and optimized user experience.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Development

```bash
# Install dependencies
cd next
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
cd next
npm run build
npm start
```

## 📁 Project Structure

```
/workspace
├── next/              # Next.js application (main project)
│   ├── app/          # Next.js 13+ App Router pages
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions and constants
│   └── public/       # Static assets
├── src/              # Legacy React app (deprecated)
└── vercel.json       # Vercel deployment configuration
```

## 🌐 Deployment on Vercel

This project is configured for Vercel deployment with the Next.js app as the primary application.

### Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository in Vercel
3. The `vercel.json` configuration will automatically:
   - Set the root directory to `next/`
   - Use the Next.js framework
   - Run the correct build commands

### Manual Configuration (if needed)

If you need to configure manually in Vercel dashboard:

- **Framework Preset**: Next.js
- **Root Directory**: `next`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Quality
npm run lint         # Run ESLint
```

## 🔧 Environment Variables

Create a `.env.local` file in the `next/` directory:

```env
# Add your environment variables here
```

## 📦 Features

- ⚡ Server-side rendering (SSR) and Static Site Generation (SSG)
- 🎨 Modern, responsive design
- 🚀 Optimized performance
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- ♿ Accessibility focused
- 🔍 SEO optimized

## 🐛 Troubleshooting

### Vercel Deployment Issues

If you encounter issues deploying to Vercel:

1. Ensure `vercel.json` exists in the root directory
2. Verify the `next/` directory contains all necessary files
3. Check that `package.json` and `package-lock.json` exist in `next/`
4. Review Vercel build logs for specific errors

### Build Errors

```bash
# Clear Next.js cache
cd next
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

All rights reserved.

## 🤝 Support

For support, email contact@valuestrat.com or open an issue in the repository.

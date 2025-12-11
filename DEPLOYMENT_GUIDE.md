# Vercel Deployment Guide

This guide explains how to deploy the ValuStrat Next.js application to Vercel.

## Project Structure

This repository contains two projects:
- **Next.js App** (in `/next` directory) - **Main application for deployment**
- React App (in root `/src` directory) - Legacy/deprecated

The Vercel configuration is set up to deploy the Next.js application.

## Automated Deployment

### Option 1: Git Integration (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Configure Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will automatically detect the configuration from `vercel.json`

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a production URL immediately

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from repository root)
vercel

# Deploy to production
vercel --prod
```

## Configuration Files

### `/workspace/vercel.json`

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rootDirectory": "next"
}
```

This configuration:
- Sets the root directory to `next/` (where the Next.js app lives)
- Specifies Next.js as the framework
- Defines the build, dev, and install commands

### Environment Variables

If your app needs environment variables:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add your variables (e.g., `NEXT_PUBLIC_API_URL`)

2. **For local development:**
   - Create `next/.env.local`
   - Add your variables
   - This file is git-ignored

## Build Verification

Before deploying, verify the build works locally:

```bash
cd next
npm install
npm run build
npm start
```

Expected output:
- Build completes successfully
- No ESLint errors
- No TypeScript errors
- Application runs on http://localhost:3000

## Troubleshooting

### Issue: "No framework detected"

**Solution:** Ensure `vercel.json` exists in the repository root with `"framework": "nextjs"` and `"rootDirectory": "next"`.

### Issue: "Build failed"

**Solution:** 
1. Check Vercel build logs
2. Run `cd next && npm run build` locally to reproduce
3. Fix any ESLint or TypeScript errors
4. Ensure all dependencies are listed in `next/package.json`

### Issue: "Module not found"

**Solution:**
1. Verify all imports use correct paths
2. Check `next/tsconfig.json` path mappings
3. Ensure all dependencies are installed

### Issue: Multiple lockfiles warning

This is informational only and won't prevent deployment. The warning appears because both root and `next/` directories have `package-lock.json` files.

## Post-Deployment

After successful deployment:

1. **Custom Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

2. **Performance:**
   - Check Vercel Analytics
   - Monitor Core Web Vitals
   - Review deployment insights

3. **Continuous Deployment:**
   - Push to your main branch triggers automatic deployments
   - Pull requests get preview deployments
   - Use deployment protection for production

## Vercel Features

Your Next.js app automatically benefits from:

- ⚡ Edge Network (global CDN)
- 🔄 Automatic HTTPS
- 🚀 Zero-config deployment
- 📊 Built-in analytics
- 🎯 Automatic image optimization
- 📱 Preview deployments
- 🔙 Instant rollbacks

## Manual Configuration (Alternative)

If you prefer to configure in Vercel UI instead of using `vercel.json`:

**Project Settings:**
- Framework Preset: `Next.js`
- Root Directory: `next`
- Build Command: `npm run build`
- Output Directory: `.next` (auto-detected)
- Install Command: `npm install`
- Development Command: `npm run dev`

## CI/CD Integration

For GitHub Actions or other CI/CD:

```yaml
# .github/workflows/vercel.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./next
```

## Support

For Vercel-specific issues, see:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Support](https://vercel.com/support)

For application issues, check the project README or contact the development team.

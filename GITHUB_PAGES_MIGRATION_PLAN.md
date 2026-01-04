# GitHub Pages Migration Plan

## Overview
This document outlines the step-by-step plan to migrate this Next.js portfolio to GitHub Pages, replacing the old portfolio.

## Prerequisites
- ✅ GitHub repository access (username: `Shav-webdev`)
- ✅ `gh-pages` package already installed
- ✅ Next.js 15 project with App Router

## Current State Analysis

### Current Configuration Issues
1. ❌ Next.js is not configured for static export
2. ❌ `basePath` is not set for GitHub Pages subdirectory (`/portfolio`)
3. ❌ Build script references `build` directory, but Next.js outputs to `out`
4. ❌ Deploy script uses wrong output directory
5. ❌ No GitHub Actions workflow for automated deployment

### Repository Structure
- **Target URL**: `https://Shav-webdev.github.io/portfolio`
- **Repository**: Either `Shav-webdev.github.io` (user/organization pages) or `portfolio` (project pages)
- **Deployment method**: Static export via `gh-pages` package

## Migration Steps

### Phase 1: Configuration Updates

#### Step 1.1: Update Next.js Configuration
**File**: `next.config.ts`

**Changes needed**:
- Enable static export (`output: 'export'`)
- Set `basePath: '/portfolio'` for GitHub Pages subdirectory
- Disable image optimization (not supported in static export)

#### Step 1.2: Update Package.json Scripts
**File**: `package.json`

**Changes needed**:
- Update `build` script to use Next.js static export
- Update `deploy` script to use `out` directory instead of `build`
- Ensure `homepage` field matches the target URL

#### Step 1.3: Update Metadata (Optional but Recommended)
**File**: `src/app/layout.tsx`

**Changes needed**:
- Update OpenGraph `url` to match GitHub Pages URL
- Update any hardcoded URLs to use the base path

### Phase 2: Repository Setup

#### Step 2.1: Determine Repository Structure
✅ **CONFIRMED**: Repository is `portfolio` (project pages)
- **Repository**: `https://github.com/Shav-webdev/portfolio.git`
- **URL**: `https://Shav-webdev.github.io/portfolio`
- **Deployment**: Deploy to `gh-pages` branch (root)
- **Base Path**: `/portfolio` (required in Next.js config)

#### Step 2.2: Initialize Git Repository (if not already done)
```bash
git init
git remote add origin https://github.com/Shav-webdev/portfolio.git
```

#### Step 2.3: Create .github/workflows Directory (for automated deployment)
This enables automatic deployment on push to main branch.

### Phase 3: Pre-Migration Backup

#### Step 3.1: Backup Old Portfolio
1. Clone or download the old portfolio repository
2. Create a backup branch: `git branch backup-old-portfolio`
3. Or archive the repository as a backup

#### Step 3.2: Document Old Portfolio URLs
- List all important URLs/links that might be bookmarked
- Note any external services (analytics, forms) that need updating
- Document any custom domain configurations

### Phase 4: Build and Test

#### Step 4.1: Test Static Export Locally
```bash
npm run build
```
- Verify `out` directory is created
- Check that all assets are properly exported
- Test that basePath is correctly applied

#### Step 4.2: Test Locally with Base Path
```bash
# Serve the out directory with base path
npx serve out -s -l 3000
# Then access at http://localhost:3000/portfolio
```

#### Step 4.3: Verify Build Output
- All pages render correctly
- Images and assets load properly
- Navigation works with base path
- No broken links
- Theme switching works
- Forms and interactive elements function

### Phase 5: Deployment

#### Step 5.1: Manual Deployment (Initial Test)
```bash
npm run deploy
```
This will:
1. Build the static site
2. Deploy to `gh-pages` branch
3. GitHub Pages will serve from the `gh-pages` branch

#### Step 5.2: Configure GitHub Pages Settings
1. Go to repository Settings → Pages
2. Source: Select "Deploy from a branch"
3. Branch: Select `gh-pages` and `/ (root)` or `/portfolio` depending on repository type
4. Save settings

#### Step 5.3: Wait for Deployment
- GitHub Pages typically takes 1-5 minutes to deploy
- Check Actions tab for deployment status
- Visit `https://Shav-webdev.github.io/portfolio` to verify

### Phase 6: Post-Migration Verification

#### Step 6.1: Functional Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images and assets load
- [ ] Theme toggle works
- [ ] Contact form functions (if applicable)
- [ ] All pages are accessible
- [ ] No 404 errors

#### Step 6.2: SEO and Analytics
- [ ] Google Analytics tracking works (verify tracking ID is correct)
- [ ] Meta tags are present
- [ ] Structured data is valid
- [ ] sitemap.xml is accessible (if generated)
- [ ] robots.txt is correct

#### Step 6.3: Performance Check
- [ ] Page load times are acceptable
- [ ] Images are optimized
- [ ] No console errors
- [ ] Mobile responsive

### Phase 7: Cleanup and Documentation

#### Step 7.1: Update Documentation
- Update README.md with deployment instructions
- Document the deployment process
- Add any environment-specific notes

#### Step 7.2: Set Up Automated Deployment (Optional but Recommended)
Create GitHub Actions workflow for automatic deployment on push to main branch.

#### Step 7.3: Archive Old Portfolio
- Tag the final version of old portfolio
- Update any documentation referencing old portfolio
- Consider adding redirect rules if applicable

## Configuration Files to Create/Update

### Files to Update:
1. `next.config.ts` - Add static export and basePath
2. `package.json` - Update build and deploy scripts
3. `src/app/layout.tsx` - Update metadata URLs (optional)

### Files to Create:
1. `.github/workflows/deploy.yml` - GitHub Actions workflow (optional)
2. `MIGRATION_CHECKLIST.md` - Tracking checklist (optional)

## Potential Issues and Solutions

### Issue 1: Image Optimization
**Problem**: Next.js Image Optimization API doesn't work with static export
**Solution**: Use regular `<img>` tags or configure `unoptimized: true` in next.config.ts

### Issue 2: Dynamic Routes
**Problem**: Dynamic routes require special handling in static export
**Solution**: Use `generateStaticParams` for dynamic routes (App Router)

### Issue 3: API Routes
**Problem**: API routes don't work with static export
**Solution**: Move API logic to external services or use serverless functions

### Issue 4: Base Path Issues
**Problem**: Assets or links not working with basePath
**Solution**: Use Next.js `Link` component and ensure all assets use relative paths

### Issue 5: Form Submissions
**Problem**: Form submissions may need configuration
**Solution**: Verify Formspree or other form services work with the new URL

## Rollback Plan

If issues occur:
1. Revert to old portfolio by deploying previous version
2. Create a new branch for fixes
3. Test fixes locally before redeploying
4. Keep old portfolio accessible during migration

## Timeline Estimate

- **Configuration Updates**: 30 minutes
- **Testing Locally**: 1 hour
- **Initial Deployment**: 30 minutes
- **Verification and Fixes**: 1-2 hours
- **Total**: 3-4 hours (including testing)

## Next Steps

1. Review this plan
2. Decide on repository structure (Option A or B)
3. Proceed with Phase 1 configuration updates
4. Test locally before deploying
5. Deploy and verify

## Questions to Answer Before Migration

1. **Repository name**: Is it `portfolio` or `Shav-webdev.github.io`?
2. **Custom domain**: Do you use a custom domain that needs updating?
3. **External services**: Are there any external services (analytics, forms, APIs) that need URL updates?
4. **Old portfolio preservation**: Should the old portfolio be archived or completely replaced?
5. **Automated deployment**: Do you want GitHub Actions for automatic deployment?

---

**Last Updated**: [Date]
**Status**: Planning Phase


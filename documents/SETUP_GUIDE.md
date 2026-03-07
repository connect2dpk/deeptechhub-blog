# DeepTechHub Blog - Complete Setup Guide (End-to-End)

A comprehensive guide to creating a custom technical blog using Next.js, MDX, Tailwind CSS, and deploying on Vercel with a custom domain.

**Status:** ✅ Complete and tested  
**Last Updated:** March 6, 2026  
**Blog URL:** https://deeptechhub.dev

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Prerequisites](#prerequisites)
3. [Phase 1: Project Initialization](#phase-1-project-initialization)
4. [Phase 2: Project Structure](#phase-2-project-structure)
5. [Phase 3: Core Configuration](#phase-3-core-configuration)
6. [Phase 4: Create Components](#phase-4-create-components)
7. [Phase 5: Create Pages](#phase-5-create-pages)
8. [Phase 6: Add Sample Content](#phase-6-add-sample-content)
9. [Phase 7: Local Testing](#phase-7-local-testing)
10. [Phase 8: Push to GitHub](#phase-8-push-to-github)
11. [Phase 9: Deploy to Vercel](#phase-9-deploy-to-vercel)
12. [Phase 10: Configure Custom Domain](#phase-10-configure-custom-domain)
13. [Phase 11: Troubleshooting](#phase-11-troubleshooting)
14. [Phase 12: Next Steps](#phase-12-next-steps)

---

## Architecture Overview

```
Markdown/MDX articles
      ↓
Next.js blog (App Router)
      ↓
TypeScript + Tailwind CSS
      ↓
Deployed on Vercel
      ↓
Custom domain (deeptechhub.dev)
```

### Technologies Used
- **Framework:** Next.js 16+
- **Styling:** Tailwind CSS 3
- **Content:** MDX (Markdown + React)
- **Language:** TypeScript
- **Deployment:** Vercel
- **Domain:** Cloudflare
- **Version Control:** GitHub

---

## Prerequisites

Before starting, ensure you have:

1. **A PC** with:
    - Git Bash installed
    - Node.js v24+ installed
    - npm v11+ installed

2. **GitHub account** with:
    - A repository created (e.g., `deeptechhub-blog`)
    - Git configured locally

3. **Vercel account** (free tier is fine)
    - Sign up at https://vercel.com
    - Link it to your GitHub account

4. **Cloudflare domain**
    - Domain purchased and active
    - Cloudflare account access

### Verification Commands

```bash
# Check Node.js
node --version  # Should be v24+

# Check npm
npm --version   # Should be v11+

# Check Git
git --version   # Should be installed
```

---

## Phase 1: Project Initialization

### Step 1: Clone Repository

```bash
# Navigate to your projects folder
cd C:\your-projects-folder

# Clone your GitHub repository
git clone https://github.com/your-username/deeptechhub-blog.git
cd deeptechhub-blog
```

### Step 2: Create Next.js Project

```bash
# Create Next.js project with Tailwind CSS
npx create-next-app@latest . --typescript --tailwind --app
```

When prompted, select:
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- App Router: **Yes**
- `src/` directory: **Yes**

### Step 3: Install Dependencies

```bash
# Install required packages
npm install next-mdx-remote gray-matter date-fns

# Install Tailwind v3 (if v4 was installed, downgrade to v3 for stability)
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@3 postcss autoprefixer
```

---

## Phase 2: Project Structure

Create the following folder structure:

```
deeptechhub-blog/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual article
│   │   ├── globals.css
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── BlogCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── MDXComponents.tsx
│   ├── lib/
│   │   ├── mdx.ts               # MDX utilities
│   │   └── posts.ts             # Post utilities
│   └── types/
│       └── post.ts              # Type definitions
├── content/
│   └── blog/                     # Your MDX articles go here
│       └── example-article.mdx
├── next.config.js
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

Create folders manually or use Git Bash:

```bash
mkdir -p content/blog src/components src/lib src/types public/images
```

---

## Phase 3: Core Configuration

### Step 1: Configure TypeScript Types

**File:** `src/types/post.ts`


### Step 2: Configure MDX Utilities

**File:** `src/lib/mdx.ts`

### Step 3: Configure Post Utilities

**File:** `src/lib/posts.ts`

### Step 4: Configure Tailwind CSS

**File:** `tailwind.config.ts`

### Step 5: Configure PostCSS

**File:** `postcss.config.mjs`

### Step 6: Configure Global Styles

**File:** `src/app/globals.css`

### Step 7: Configure Next.js

**File:** `next.config.js`

---

## Phase 4: Create Components

### Step 1: MDX Components

**File:** `src/components/MDXComponents.tsx`

### Step 2: Header Component

**File:** `src/components/Header.tsx`

### Step 3: Footer Component

**File:** `src/components/Footer.tsx`

### Step 4: Blog Card Component

**File:** `src/components/BlogCard.tsx`

---

## Phase 5: Create Pages

### Step 1: Root Layout

**File:** `src/app/layout.tsx`

### Step 2: Home Page

**File:** `src/app/page.tsx`

### Step 3: Blog Listing Page

**File:** `src/app/blog/page.tsx`

### Step 4: Individual Article Page

**File:** `src/app/blog/[slug]/page.tsx`

---

## Phase 6: Add Sample Content

### Create Sample Articles

**Example File:** `content/blog/getting-started-with-spring-boot.mdx`

**Important:** MDX file naming rules:
- Use lowercase letters
- Separate words with hyphens (kebab-case)
- Example: `getting-started-with-spring-boot.mdx`
- NOT: `Getting Started With Spring Boot.mdx`

---

## Phase 7: Local Testing

### Step 1: Start Development Server

```bash
npm run dev
```

Wait for:
```
✓ Ready in XXXms
```

### Step 2: Test Pages

1. **Home Page:** http://localhost:3000
    - Should show hero section with featured articles
    - Featured articles should display

2. **Blog Listing:** http://localhost:3000/blog
    - Should show all articles in a grid
    - Shows article count

3. **Individual Article:** http://localhost:3000/blog/getting-started-with-spring-boot
    - Should display article title
    - Should show metadata (author, date, reading time)
    - Should render MDX content properly

### Step 3: Verify Responsive Design

- Test on desktop (browser)
- Test on mobile (use browser DevTools)
- Check navigation menu works on mobile

### Step 4: Stop Dev Server

```bash
# Press Ctrl+C in the terminal
```

---

## Phase 8: Push to GitHub

### Step 1: Configure Git

```bash
# Set your Git identity (if not already done)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 2: Create .gitignore

**File:** `.gitignore`

```
# Dependencies
node_modules/
.npm
package-lock.json

# Next.js
.next/
out/
build/

# Environment
.env
.env.local
.env.*.local

# IDE
.idea/
.vscode/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*
```

### Step 3: Commit and Push

```bash
# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Initial blog setup with Next.js, MDX, and Tailwind CSS"

# Push to GitHub
git push origin main
```

---

## Phase 9: Deploy to Vercel

### Step 1: Connect GitHub to Vercel

1. Go to: https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### Step 2: Import Repository

1. You should see your repositories listed
2. Find `deeptechhub-blog`
3. Click it to select
4. Click **"Import"** or **"Deploy"**

### Step 3: Configure Project

Settings should auto-populate:
- **Project Name:** `deeptechhub-blog`
- **Framework:** `Next.js`
- **Root Directory:** `.`

Click **"Deploy"** (leave other settings as default)

### Step 4: Wait for Deployment

- Vercel will build your project (2-5 minutes)
- You'll see build progress
- Once complete: "Deployment successful ✓"

### Step 5: Get Your Vercel URL

After deployment, you'll see a URL like:
```
https://deeptechhub-blog-xxx.vercel.app
```

**Save this URL** - you'll use it in the next phase.

### Step 6: Test Vercel Deployment

1. Visit your Vercel URL
2. Verify all pages load correctly
3. Check that articles display properly

---

## Phase 10: Configure Custom Domain

### Prerequisites

- Domain registered with Cloudflare
- Vercel deployment working
- Cloudflare account access

### Step 1: Add Domain to Vercel

1. Go to: https://vercel.com/dashboard
2. Click your `deeptechhub-blog` project
3. Click **"Settings"** tab
4. Click **"Domains"** in left sidebar
5. Click input field or **"Add"** button
6. Type your domain: `deeptechhub.dev`
7. Click **"Add"**
8. Repeat for `www.deeptechhub.dev`

### Step 2: Note DNS Records

Vercel will show DNS records to add. You'll see:

```
For deeptechhub.dev:
Type: A
Name: @
Value: 216.198.79.1

Type: TXT
Name: _vercel
Value: vc-domain-verify=deeptechhub.dev,XXXXX

For www.deeptechhub.dev:
Type: CNAME
Name: www
Value: ac6e084c48a75a2d.vercel-dns-017.com

Type: TXT
Name: _vercel.www
Value: vc-domain-verify=www.deeptechhub.dev,XXXXX
```

**Keep this page open.**

### Step 3: Add DNS Records in Cloudflare

1. Go to: https://dash.cloudflare.com
2. Select your domain
3. Click **"DNS"** in left sidebar
4. Delete any old DNS records you added previously

#### Add A Record:

1. Click **"Add record"**
2. Fill in:
   ```
   Type: A
   Name: @ (or leave blank)
   IPv4 address: 216.198.79.1
   TTL: Auto
   Proxy: DNS only (gray cloud)
   ```
3. Click **"Save"**

#### Add CNAME Record for www:

1. Click **"Add record"**
2. Fill in:
   ```
   Type: CNAME
   Name: www
   Target: ac6e084c48a75a2d.vercel-dns-017.com
   TTL: Auto
   Proxy: DNS only (gray cloud)
   ```
3. Click **"Save"**

#### Add TXT Records for Verification:

1. Click **"Add record"**
2. Fill in:
   ```
   Type: TXT
   Name: _vercel
   Content: vc-domain-verify=deeptechhub.dev,XXXXX
   TTL: Auto
   ```
3. Click **"Save"**

4. Click **"Add record"** again
5. Fill in:
   ```
   Type: TXT
   Name: _vercel.www
   Content: vc-domain-verify=www.deeptechhub.dev,XXXXX
   TTL: Auto
   ```
6. Click **"Save"**

### Step 4: Verify Configuration

1. Go back to Vercel Settings → Domains
2. Click **"Refresh"** button next to each domain
3. Wait 5-30 minutes for DNS propagation

### Step 5: Check Status

After DNS propagates:
- Status should change from "Verification Needed" to ✓ "Valid Configuration"

### Step 6: Test Custom Domain

1. Visit: `https://deeptechhub.dev`
2. Should show your blog
3. Verify HTTPS (green lock icon)
4. Click through blog pages to test

---

## Phase 11: Troubleshooting

### Issue: Build Fails on Vercel

**Error:** File 'src/app/blog/your-first-article/page.tsx' is not a module

**Solution:**
```bash
# Delete conflicting routes
rm -r src/app/blog/your-first-article

# Push to GitHub
git add .
git commit -m "Remove conflicting routes"
git push origin main

# Vercel will redeploy automatically
```

### Issue: CSS Errors on Startup

**Error:** Cannot apply unknown utility class `border-gray-200`

**Solution:**
1. Verify Tailwind is installed: `npm list tailwindcss`
2. Check `tailwind.config.ts` has correct content paths
3. Verify `postcss.config.mjs` has correct plugins
4. Clear cache:
   ```bash
   rm -r .next
   npm run dev
   ```

### Issue: Articles Not Showing

**Solution:**
- Verify MDX files are in `content/blog/` folder
- Check filenames are lowercase with hyphens
- Verify frontmatter has all required fields:
    - `title`
    - `description`
    - `publishedAt` (YYYY-MM-DD)
    - `author`
    - `category`

### Issue: Domain Not Working

**Solution:**
1. Check DNS records in Cloudflare match Vercel exactly
2. Wait 30+ minutes for DNS propagation
3. Use https://dnschecker.org/ to verify DNS
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try in incognito/private mode

### Issue: SSL Certificate Warning

**Solution:**
- Vercel auto-generates SSL certificates
- Wait 15-30 minutes
- Go to Vercel project → Settings → Domains
- Click on your domain → "Request Certificate"

---

## Phase 12: Next Steps

### Immediate Tasks

1. ✅ Replace sample articles with your content
2. ✅ Customize author name and branding
3. ✅ Update GitHub links
4. ✅ Test all articles display correctly

### Content Migration from Hashnode

1. Export articles from Hashnode
2. Convert to MDX format (copy content, add frontmatter)
3. Place in `content/blog/`
4. Test locally: `npm run dev`
5. Deploy: `git push`

### MDX Article Template

```markdown
---
title: "Article Title Here"
description: "Brief description for previews and SEO"
publishedAt: "YYYY-MM-DD"
author: "Your Name"
category: "java|spring-boot|databases|etc"
readingTime: "X min read"
tags: ["tag1", "tag2", "tag3"]
---

# Article Title

Your content starts here using markdown.

## Section 2

More content...

```

### Optional Enhancements

1. **Newsletter Integration**
    - Add email signup form
    - Integrate with Mailchimp or EmailJS

2. **Search Functionality**
    - Add article search feature
    - Use Algolia or simple client-side search

3. **Comments**
    - Add Giscus for GitHub-based comments
    - Or use Disqus

4. **Analytics**
    - Add Vercel Analytics
    - Or Google Analytics

5. **Social Sharing**
    - Add share buttons
    - Enhance Twitter/LinkedIn sharing

---

## Summary Commands

### Development
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Run production build
```

### Git Workflow
```bash
git add .
git commit -m "message"
git push origin main     # Automatic Vercel redeploy
```

### Troubleshooting
```bash
rm -r .next              # Clear build cache
npm cache clean --force  # Clear npm cache
npm install              # Reinstall dependencies
```

---

## Useful Links

- **Blog:** https://deeptechhub.dev
- **GitHub:** https://github.com/your-username/deeptechhub-blog
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Cloudflare DNS:** https://dash.cloudflare.com
- **Next.js Docs:** https://nextjs.org/docs
- **MDX Docs:** https://mdxjs.com/
- **Tailwind CSS:** https://tailwindcss.com/

---

## Key Concepts

### Dynamic Routing ([slug])

The file `src/app/blog/[slug]/page.tsx` is a dynamic route:
- Matches URLs like `/blog/getting-started-with-spring-boot`
- The part after `/blog/` becomes the `slug` parameter
- Your MDX files in `content/blog/` are matched to slugs

### MDX Format

MDX is Markdown + JSX:
- Front matter (---) contains metadata
- Content uses Markdown syntax
- Can include React components

### Deployment Flow

1. Push to GitHub
2. Vercel detects changes automatically
3. Vercel runs `npm run build`
4. Vercel deploys to CDN
5. Changes live at your domain

---

## Conclusion

You now have a fully functional, production-ready blog with:

✅ Modern Next.js framework  
✅ TypeScript for type safety  
✅ Tailwind CSS for styling  
✅ MDX for rich content  
✅ Deployed on Vercel  
✅ Custom domain configured  
✅ Responsive design  
✅ SEO optimized

**Next time you create a blog, simply follow this guide step-by-step and you'll have a new blog up and running in under 2 hours!**

---

**Version:** 1.0  
**Last Updated:** March 6, 2026  
**Status:** ✅ Tested and working
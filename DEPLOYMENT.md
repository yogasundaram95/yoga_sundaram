# Portfolio Website Deployment Guide

## ✅ Completed Features

1. **Resume Download Button** - Added to both Hero and Contact sections
2. **Real Project Links** - Placeholders ready (update with your actual GitHub repos)
3. **Scroll Animations** - Implemented on all major sections
4. **Testimonials Section** - Added with sample data (update with real testimonials)
5. **Hover Animations** - Added lift/scale effects on project cards
6. **SEO Meta Tags** - Complete Open Graph and Twitter Card tags
7. **Custom Favicon** - YS logo created (blue circle with white text)
8. **Google Analytics** - Placeholder added (replace with your GA ID)
9. **LinkedIn Integration** - Prominent "Connect on LinkedIn" button in Contact
10. **GitHub Pages Deployment** - Successfully deployed!

## 🌐 Your Portfolio is Live!

Your website is now deployed at:
**https://yogasundaram95.github.io/my-showcase-site**

## 📝 Next Steps to Complete

### 1. Add Your Resume PDF
Place your resume PDF file at:
```
/public/resume.pdf
```
The download buttons are already configured to use this path.

### 2. Update Project Links
In `src/components/Projects.tsx`, replace the `"#"` placeholders with your actual GitHub repository URLs and live demo links:
```typescript
liveUrl: "https://your-demo-url.com",
githubUrl: "https://github.com/yourusername/your-repo",
```

### 3. Set Up Google Analytics
1. Create a Google Analytics 4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. In `index.html`, replace both instances of `G-XXXXXXXXXX` with your actual ID

### 4. Update Testimonials
In `src/components/Testimonials.tsx`, replace the sample testimonials with real ones from your colleagues/managers.

### 5. Set Up Custom Domain (yogasundaram.com)

#### A. Purchase Domain
If you haven't already, purchase `yogasundaram.com` from a domain registrar like:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

#### B. Configure GitHub Pages
1. Go to your repository: https://github.com/yogasundaram95/my-showcase-site
2. Click **Settings** → **Pages**
3. Under "Custom domain", enter: `yogasundaram.com`
4. Click **Save**
5. Enable "Enforce HTTPS" (wait a few minutes for it to become available)

#### C. Configure DNS Records
In your domain registrar's DNS settings, add these records:

**For Apex Domain (yogasundaram.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain (optional):**
```
Type: CNAME
Name: www
Value: yogasundaram95.github.io
```

#### D. Update Code for Custom Domain
Once your custom domain is set up:

1. Update `package.json`:
```json
"homepage": "https://yogasundaram.com",
```

2. Update `vite.config.ts`:
```typescript
base: mode === "production" ? "/" : "/",
```

3. Update all URLs in `index.html` from:
   - `https://yogasundaram.com/` (if using custom domain from start)

4. Rebuild and redeploy:
```bash
npm run deploy
```

### 6. Create an Open Graph Image
Create a 1200x630px image showcasing your portfolio and save it as:
```
/public/og-image.jpg
```
This will be used when sharing your portfolio on social media.

### 7. Optional: Dark/Light Mode Toggle
If you want to add a theme toggle, install and configure:
```bash
npm install next-themes
```
Then add a theme switcher component to the Navigation bar.

## 🚀 Deploy Updates

Whenever you make changes:
```bash
npm run deploy
```

This will automatically build and deploy to GitHub Pages.

## 📊 Monitor Your Site

1. **Google Analytics** - Track visitors after setting up GA
2. **GitHub Pages** - Check deployment status in repository Settings → Pages
3. **Custom Domain DNS** - Use tools like https://dnschecker.org to verify DNS propagation

## 🐛 Troubleshooting

### Site not loading?
- Check GitHub Pages is enabled in repository settings
- Verify the gh-pages branch exists
- Wait 5-10 minutes for deployment to propagate

### Custom domain not working?
- Verify DNS records are correct
- DNS propagation can take 24-48 hours
- Check GitHub Pages settings shows "DNS check successful"

### Broken links after deploying?
- Ensure `base` path in vite.config.ts matches your deployment URL
- For custom domain, use base: "/"
- For GitHub Pages subdomain, use base: "/my-showcase-site/"

## 📧 Support

If you encounter issues:
1. Check GitHub repository Issues tab
2. Review GitHub Pages documentation
3. Verify all file paths are correct (especially public assets)

---

**Congratulations!** Your data science portfolio is live and ready to impress recruiters and colleagues!

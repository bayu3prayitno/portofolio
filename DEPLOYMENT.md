# Deployment Guide

This guide will help you deploy your SnapFolio portfolio website to various hosting platforms.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)
Vercel offers free hosting with automatic deployments from GitHub.

**Steps:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub account
4. Import your repository
5. Deploy with default settings

**Benefits:**
- Free hosting
- Automatic HTTPS
- Global CDN
- Automatic deployments on git push

### 2. Netlify
Another excellent free hosting option.

**Steps:**
1. Build your project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repo for automatic deployments

### 3. GitHub Pages
Free hosting directly from your GitHub repository.

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update vite.config.js:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```
4. Run: `npm run deploy`

### 4. Firebase Hosting
Google's hosting solution with great performance.

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase login`
3. Run: `firebase init hosting`
4. Build project: `npm run build`
5. Deploy: `firebase deploy`

## 🔧 Pre-Deployment Checklist

### Content Updates
- [ ] Update personal information in `src/data/portfolioData.js`
- [ ] Add your profile photo to `public/profile-photo.jpg`
- [ ] Add your CV PDF to `public/CV_ATS.pdf`
- [ ] Add project screenshots to `public/` folder
- [ ] Update social media links
- [ ] Test all external links

### Performance Optimization
- [ ] Optimize images (use WebP format when possible)
- [ ] Minimize image file sizes
- [ ] Test on mobile devices
- [ ] Check loading speeds

### SEO Optimization
- [ ] Update meta tags in `index.html`
- [ ] Add proper alt text to images
- [ ] Ensure proper heading hierarchy
- [ ] Test with Google PageSpeed Insights

### Testing
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test dark mode toggle
- [ ] Test responsive design on different screen sizes
- [ ] Test CV download functionality

## 🎯 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings

### For Netlify:
1. Go to "Site settings" → "Domain management"
2. Add custom domain
3. Update DNS records as instructed

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Create a Google Analytics account
2. Get your tracking ID
3. Add to your HTML head section

### Vercel Analytics
1. Enable in Vercel dashboard
2. Add to your project settings

## 🔒 Security Considerations

- Never commit sensitive information (API keys, passwords)
- Use environment variables for sensitive data
- Regularly update dependencies
- Enable HTTPS (automatic with most hosting providers)

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🐛 Common Issues & Solutions

### Build Errors
- Check for missing dependencies
- Ensure all imports are correct
- Run `npm run build` locally first

### Image Loading Issues
- Verify image paths are correct
- Ensure images are in the `public` folder
- Check image file formats are supported

### Routing Issues
- For SPA routing, configure redirects
- Update base URL in vite.config.js if needed

### Performance Issues
- Optimize images
- Enable compression
- Use lazy loading for images

## 📞 Support

If you encounter issues:
1. Check the console for errors
2. Verify all file paths are correct
3. Test locally first
4. Check hosting provider documentation

---

Good luck with your deployment! 🚀

# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages. There are two ways to deploy:

## Method 1: Automatic Deployment (Recommended)

The project uses GitHub Actions to automatically deploy when you push to the main branch.

### Setup Steps:

1. **Push your code to GitHub** (if you haven't already):
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **The site will automatically deploy!**
   - Every push to `main` branch will trigger a new deployment
   - You can also manually trigger deployment from the **Actions** tab
   - Your site will be available at: `https://YOUR_USERNAME.github.io/duy/`

### Monitoring Deployments:
- Go to the **Actions** tab in your repository to see deployment progress
- Each deployment takes about 1-2 minutes

## Method 2: Manual Deployment

You can also deploy manually using the `gh-pages` package:

```bash
bun run deploy
```

This will:
1. Build your project (`bun run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

**Note**: For manual deployment, you need to set GitHub Pages source to the `gh-pages` branch in your repository settings.

## Configuration

The deployment is configured in:
- **`vite.config.ts`**: Sets the base path to `/duy/`
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow
- **`package.json`**: Deploy scripts

### Important: Repository Name

If your GitHub repository name is different from "duy", update the `base` path in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/', // Update this
})
```

## Troubleshooting

### CSS/JS files not loading
- Make sure the `base` path in `vite.config.ts` matches your repository name
- The base path should be `/repository-name/`

### 404 errors
- Ensure GitHub Pages is enabled in repository settings
- Check that the source is set to "GitHub Actions" or "gh-pages branch"
- Verify the deployment completed successfully in the Actions tab

### Changes not appearing
- Wait a few minutes after deployment
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check if deployment was successful in Actions tab

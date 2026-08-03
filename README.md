# Baker Events LLC Website

A responsive static website for **bakereventsllc.com**, designed for free hosting with GitHub Pages.

## Files

- `index.html` — all website content
- `styles.css` — colors, layout, mobile styling
- `script.js` — mobile menu and quote-request email form
- `CNAME` — custom-domain setting for GitHub Pages

## Before publishing

1. Open `index.html`.
2. Replace:
   - `YOUR-EMAIL@example.com`
   - `(864) 000-0000`
3. Open `script.js`.
4. Replace `YOUR-EMAIL@example.com` with the same business email.
5. Replace the four gallery placeholder panels with your own photographs.

## Publish on GitHub Pages

1. Upload all files to the root of your GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)`, then save.
5. In **Custom domain**, enter `bakereventsllc.com`.
6. Configure the DNS records at GoDaddy as directed by GitHub.
7. After GitHub confirms the DNS setup, enable **Enforce HTTPS**.

The repository must contain `index.html` at the top level of the selected publishing source.

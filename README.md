# b-davies.dev

Personal portfolio site for Benedict Anokye-Davies.

## Stack

Plain HTML, CSS, and vanilla JS. No build step, no dependencies. Deploys to GitHub Pages.

## Structure

```
b-davies.dev/
  index.html       — single-page site
  css/style.css    — all styles
  js/main.js       — scroll animations, nav, skill bars
  assets/          — static assets (images etc.)
  CNAME            — custom domain config for GitHub Pages
```

## Deploy

1. Create a GitHub repo named `b-davies.dev` (or any name you prefer)
2. Push this directory to the `main` branch
3. In repo Settings > Pages, set source to `main` branch, root directory
4. The CNAME file handles custom domain routing automatically

## Development

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

No build step required.

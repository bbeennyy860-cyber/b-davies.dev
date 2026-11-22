# b-davies.dev

Benedict Anokye-Davies's portfolio. Static HTML, CSS and JavaScript, served by GitHub Pages from `main` at the repository root.

## Run locally

```sh
python -m http.server 8080
```

Open http://localhost:8080. No build or dependencies are needed to serve the committed site. The distributable is the static repository tree; the playground includes its compiled browser bundle and fonts are hosted locally with their licenses.

## Structure

- `index.html`: selected work and background
- `project.html`: Morphogen project note
- `demo.html`, `morphogen/`: interactive playground
- `style.css`, `app.js`, `assets/`: design and interactions
- `cv/latest.pdf`: the general CV used by both homepage links. Replace this PDF in place when the general CV changes; keep application-specific editions separate.
- `cv/index.html`: forwards the short `/cv/` URL to that same PDF.
- `projects/`, `blog/`, `css/`, `js/`: preserved legacy URLs and resources
- `CNAME`: custom domain, `b-davies.dev`
- `VERSION`: canonical site release version

## Publication

Push reviewed changes to `main` to trigger GitHub Pages. Preserve `CNAME` and existing public paths. After deployment check the homepage, CV and playground over HTTPS. Reverting the release commit restores the prior site.

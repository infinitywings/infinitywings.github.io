# Chenglong Fu — Academic Homepage

Source for [https://infinitywings.github.io/](https://infinitywings.github.io/).

This is a static academic website built with HTML, CSS, and JavaScript. It has no build dependencies, database, or API keys.

## Editing

| File | Contents |
| --- | --- |
| `index.html` | Profile, research, awards, news, publications, software, service, and teaching |
| `styles.css` | Typography, colors, compact layout, and responsive styles |
| `app.js` | Publication search/filtering and certificate viewer |
| `assets/Chenglong-Fu-CV.pdf` | Current downloadable CV |
| `assets/awards/` | Original award PDFs and their image previews |
| `assets/fonts/` | Locally hosted Inter font and its license |

To preview locally, run this from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`.

## Publishing

GitHub Pages publishes the **root directory of the `main` branch**. The `.nojekyll` file keeps the site static. After editing, commit and push to `main`; GitHub automatically builds and deploys the updated site. Deployment progress appears in the repository's Actions tab and in Settings → Pages.

Before pushing, check the desktop and mobile layout, local links, the CV, and both certificate viewers. Keep document and image links relative so the site also works in a local preview.

## Content maintenance

- Keep accepted papers, published papers, workshop/industry-track papers, and preprints accurately labeled.
- Preserve the Security Track qualification on the Inscrypt award.
- Use the original certificates; their images are page renders, not recreated documents.
- Refresh the CV PDF after updating and compiling the editable CV.
- Update dated news from confirmed events rather than assuming that scheduled activities occurred.

## Font

The [Inter font](https://github.com/rsms/inter) is distributed under the SIL Open Font License. A copy is included in [`assets/fonts/OFL-Inter.txt`](assets/fonts/OFL-Inter.txt).

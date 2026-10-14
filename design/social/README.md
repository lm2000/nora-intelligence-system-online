# Use cases social card

The editable source is `use-cases.html`; its 1200 × 630 PNG export is `public/images/social/use-cases.png`. It reuses the existing Nora mark, Public Sans fonts and site palette. The HTML is an authoring asset, not a new site page.

From the repository root, after installing the existing dependencies:

```sh
python3 -m http.server 8894 --bind 127.0.0.1
```

Open `http://127.0.0.1:8894/design/social/use-cases.html`, set a 1200 × 630 viewport, wait for the bundled fonts to load, and export that exact viewport as PNG. Check the headline, logo, footer and image dimensions before replacing the maintained export. Do not include browser controls or rescale an existing screenshot.

Use cases opts into the image through `SiteLayout`'s `socialImage` and `socialImageAlt` properties. Absolute social-image URLs use the configured site origin and base path. A hosted review image can be inspected directly on its preview host; the production metadata URL becomes available when the image is released. LinkedIn can retain a previously cached thumbnail, so verify the actual media preview after an approved release.

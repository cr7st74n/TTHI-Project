# Tony's Talent Home Improvement — React Website

A responsive, one-page business website built with React and Vite.

## Included sections

- Responsive header and mobile navigation
- Hero section with calls to action
- Editable services grid
- About and business values
- Filterable project gallery
- Four-step project process
- Contact details, social links, and project inquiry form
- Mobile, tablet, and desktop styling

## Start the website locally

1. Install [Node.js](https://nodejs.org/) version 18 or newer.
2. Open a terminal inside this project folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local address shown in the terminal, normally `http://localhost:5173`.

## Create a production build

```bash
npm run build
```

The optimized website will be created in the `dist` folder.

## Main files to edit

- `src/siteData.js` — business name, phone, email, service area, social links, services, projects, and process steps.
- `src/App.jsx` — page structure and content.
- `src/styles.css` — colors, spacing, fonts, responsive layout, and visual design.
- `public/images` — hero, about, and gallery images.

## Replace the placeholder pictures

The included SVG files are lightweight placeholders. You can either:

1. Replace an SVG with your own image while keeping the same filename; or
2. Add JPG, PNG, or WebP files to `public/images` and change the corresponding `image` path in `src/siteData.js` or `src/App.jsx`.

Example:

```js
image: '/images/my-kitchen-project.jpg'
```

For best results, use landscape images around 1600 × 1100 pixels.

## Contact form behavior

The starter form uses a `mailto:` link. When a visitor submits the form, their default email application opens with the project details filled in. This works without a backend.

For a true web form that sends messages silently, connect the form to a service such as Formspree, EmailJS, Netlify Forms, or your own API.

## Important placeholders

Update these values in `src/siteData.js` before publishing:

- Phone number
- Email address
- Service area
- Facebook, Instagram, and YouTube links

Also review all service descriptions and add real project photos before launching.

## Publish on GitHub Pages

This project includes a GitHub Actions deployment workflow and automatic GitHub Pages path handling. See [`DEPLOY_TO_GITHUB_PAGES.md`](DEPLOY_TO_GITHUB_PAGES.md) for the complete steps.


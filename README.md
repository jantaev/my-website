# My Website

Personal website built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com). It builds to plain static files.

## Structure

```
src/
  layouts/BaseLayout.astro   Page shell: <head>, header, footer
  components/                Header (nav + mobile menu), Footer, ProjectCard
  pages/                     One file per page: index, about, projects, contact
  styles/global.css          Tailwind import and design tokens (colors, fonts)
public/                      Files served as-is (favicon, images)
astro.config.mjs             Site URL and base path for GitHub Pages
.github/workflows/deploy.yml Builds and deploys to GitHub Pages on push to main
```

## Develop

```
npm install
npm run dev       # local preview with live reload
npm run build     # build to dist/
npm run preview   # serve the built site
```

## Editing

- Page text lives in `src/pages/*.astro`.
- The nav links are listed once, in `src/components/Header.astro`.
- Change colors in the `:root` block of `src/styles/global.css`; dark-mode
  values are in the `prefers-color-scheme: dark` block below it.
- Add a project by adding a `<ProjectCard>` in `src/pages/projects.astro`.

## Deploy with GitHub Pages

In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
After that, every push to `main` builds and publishes the site at
https://jantaev.github.io/my-website/.

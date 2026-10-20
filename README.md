# My Website

A simple personal website built with plain HTML, CSS and a little JavaScript.
No build step and no dependencies.

## Structure

```
index.html      Home page
about.html      About me
projects.html   Portfolio / work
contact.html    Contact links
css/style.css   All styles (colors and fonts live in :root at the top)
js/main.js      Mobile menu toggle
images/         Favicon, photos and other images
```

## Preview locally

- **VS Code:** install the "Live Server" extension, open `index.html`, and
  click "Go Live". The browser reloads every time you save.
- **Terminal:** run `npx serve .` and open the URL it prints.

## Editing

- Replace "Your Name", the placeholder text and the contact links.
- Change the site's colors and fonts in the `:root` block of `css/style.css`.
- The header and footer are copied into each page. If you change the nav,
  update it in all four HTML files.

## Deploy with GitHub Pages

1. Create a new repository on GitHub and push this project to it.
2. On GitHub, go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, then pick
   `main` and `/ (root)`.
4. After a minute your site is live at
   `https://<your-username>.github.io/<repo-name>/`.

Every push to `main` updates the live site.

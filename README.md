# Azizul Islam — GitHub Pages portfolio

React + TypeScript + Vite + Tailwind CSS. The original design, animations, projects, CV download, and contact links are preserved. No Cloudflare, workerd, Vinext, backend, API key, or ChatGPT subscription is required to serve the built website.

## Option A: Publish without installing Node on your computer

GitHub Actions builds this project for you.

1. Sign into your GitHub account. Create a **public** repository called `azizul-arif.github.io` if your username is `Azizul-arif`. If that repository already hosts a website, use a different repository such as `portfolio` to avoid replacing it.
2. Extract this ZIP. Upload the **contents** of `azizul-github-pages` to the repository root, where `package.json` and `index.html` must appear. Do not upload the ZIP or an extra parent folder. Commit to `main`.
3. Ensure `.github/workflows/deploy.yml` was uploaded. Dot-prefixed folders may be skipped by drag-and-drop. If missing, click **Add file > Create new file**, name it `.github/workflows/deploy.yml`, and paste the supplied file's contents.
4. Open repository **Settings > Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open **Actions > Deploy portfolio to GitHub Pages > Run workflow**, select `main`, and run it. If the first automatic run failed before you enabled Pages, rerun it now.
6. Wait for a successful deployment. Use the URL shown by the deployment or Settings > Pages. For the user repository it should be `https://azizul-arif.github.io/`; a repository named `portfolio` uses `https://azizul-arif.github.io/portfolio/`.

Future pushes to `main` rebuild and deploy automatically. This workflow publishes the portfolio and its downloadable CV. The built-in GitHub token handles deployment; no personal token or additional secrets are needed.

## Option B: Upload with Git

Create an empty repository (without an initial README) first. Open a terminal inside this extracted folder:

```sh
git init
git add .
git commit -m "Add React portfolio"
git branch -M main
git remote add origin https://github.com/Azizul-arif/azizul-arif.github.io.git
git push -u origin main
```

Authenticate using Git's browser sign-in if prompted. Change the remote URL if you chose another repository. Then follow steps 4–6 above. Never place credentials in files or commit them.

## Run locally (optional)

Use **64-bit Node.js 22.13 or newer in the Node 22 series**. The GitHub workflow installs Node 22 automatically, so publishing via Option A does not depend on your local Node 18 installation used for FlowOps.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. Keep `package-lock.json`; it ensures repeatable installation.

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`. The preview command is for local testing.

## Edit content

- `src/App.tsx`: text, skills, experience, project details and links
- `src/styles.css`: colors, fonts, responsive layout and motion
- `public/Azizul-Islam-CV.pdf`: downloadable CV
- `public/favicon.svg`: site icon
- `index.html`: page title and description

Assets use relative paths, so both root and repository-based GitHub Pages URLs work. Fonts are loaded from Google Fonts, with local fallback fonts if unavailable.

## Troubleshooting

- **Node 18 / unsupported engine:** use Node 22 for local work, or use GitHub Actions to build online.
- **404:** confirm a successful Actions run, Pages source is GitHub Actions, and you used the URL shown by GitHub.
- **No workflow listed:** confirm `.github/workflows/deploy.yml` exists on `main`.
- **Pages configuration error:** enable GitHub Pages in Settings and rerun the workflow.
- **Workflow permission error:** the workflow declares `pages: write` and `id-token: write`; organization policies may still require an administrator to enable Pages/Actions.

## Official deployment reference

https://vite.dev/guide/static-deploy.html#github-pages

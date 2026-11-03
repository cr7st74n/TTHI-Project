# Publish Tony's Talent on GitHub Pages

This copy is already configured for GitHub Pages. The deployment workflow builds the React/Vite website and publishes the `dist` folder automatically.

## 1. Create the GitHub repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Use a name such as `tonys-talent-home-improvement`.
4. For the easiest client demo, choose **Public**.
5. Do not add a README, `.gitignore`, or license because those files already exist in this project.
6. Select **Create repository**.

## 2. Upload the project with Git

Open a terminal inside this project folder and run:

```bash
git init
git add .
git commit -m "Initial Tony's Talent website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your actual GitHub values.

You can also upload the files through GitHub's web interface. Make sure the files from this folder are placed at the repository root, including the `.github` folder.

## 3. Enable GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**.
3. In the left menu, select **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and select the deployment workflow if you want to watch it run.

After the workflow succeeds, the site address will normally be:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

The workflow also shows the exact published URL on its deployment page.

## Updating the website

After editing the website, commit and push the changes:

```bash
git add .
git commit -m "Update website"
git push
```

Every push to the `main` branch automatically rebuilds and republishes the website.

## Common checks

- If the page is blank or images are missing, confirm that the latest GitHub Actions workflow completed successfully.
- Confirm **Settings > Pages > Source** is set to **GitHub Actions**.
- Confirm the default branch is named `main`. If you use another branch, update `.github/workflows/deploy.yml`.
- Do not upload `node_modules`; it is excluded by `.gitignore`.

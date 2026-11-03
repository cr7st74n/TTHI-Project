import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubRepository = process.env.GITHUB_REPOSITORY || '';
const [githubOwner, githubRepositoryName] = githubRepository.split('/');
const isGitHubUserSite = githubRepositoryName === `${githubOwner}.github.io`;
const githubPagesBase = githubRepositoryName && !isGitHubUserSite
  ? `/${githubRepositoryName}/`
  : '/';

export default defineConfig({
  // GitHub Actions provides GITHUB_REPOSITORY automatically during deployment.
  // Local development and username.github.io repositories continue to use '/'.
  base: process.env.GITHUB_ACTIONS ? githubPagesBase : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});

import { Octokit } from 'https://cdn.skypack.dev/octokit';

const { VITE_GITHUB_TOKEN } = import.meta.env;

const octokit = new Octokit({
  auth: VITE_GITHUB_TOKEN,
});

export default octokit;

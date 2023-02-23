import { Octokit } from 'https://cdn.skypack.dev/octokit';

const { GITHUB_TOKEN } = import.meta.env;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export default octokit;

import { Octokit, App } from 'octokit';

const { GITHUB_TOKEN } = import.meta.env;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export default octokit;

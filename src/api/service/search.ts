import octokit from '@/api/octokit';

interface GetRepositoriesRequest {
  q: string;
  page: number;
  perPage?: number;
}

const searchService = {
  async getRepositories({ q, page, perPage = 20 }: GetRepositoriesRequest) {
    return await octokit.request('GET /search/repositories', {
      q,
      page,
      per_page: perPage,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  },
} as const;

export default searchService;

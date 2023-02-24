import octokit from '@/api/octokit';
import { GetRepositoriesRequest, GetRepositoriesResponse } from '@/types/dto/search';

const searchService = {
  async getRepositories({
    q,
    page,
    perPage = 20,
  }: GetRepositoriesRequest): Promise<GetRepositoriesResponse> {
    return await octokit.request('GET /search/repositories', {
      q,
      page,
      per_page: perPage,
    });
  },
} as const;

export default searchService;

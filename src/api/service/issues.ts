import octokit from '@/api/octokit';
import { GetRepositoryIssuesRequest, GetRepositoryIssuesResponse } from '@/types/dto/issues';

const issuesService = {
  async getRepositoryIssues({
    owner,
    repo,
    page = 1,
    perPage = 5,
    state = 'open',
  }: GetRepositoryIssuesRequest): Promise<GetRepositoryIssuesResponse> {
    return await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
      page,
      per_page: perPage,
      state,
    });
  },
} as const;

export default issuesService;

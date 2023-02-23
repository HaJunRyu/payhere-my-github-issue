import { BaseResponse } from './base';

interface RepositoryItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    received_events_url: string;
    type: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    site_admin: boolean;
  };
}

interface RepositoriesData {
  incomplete_results: boolean;
  items: RepositoryItem[];
  total_count: number;
}

export interface GetRepositoriesRequest {
  q: string;
  page: number;
  perPage?: number;
}

export interface GetRepositoriesResponse extends BaseResponse<RepositoriesData> {}

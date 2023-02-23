interface Headers {
  'cache-control': string;
  'content-type': string;
  'x-github-media-type': string;
  'x-github-request-id': string;
  'x-ratelimit-limit': string;
  'x-ratelimit-remaining': string;
  'x-ratelimit-reset': string;
  'x-ratelimit-resource': string;
  'x-ratelimit-used': '1';
}

export interface BaseResponse<D> {
  headers: Headers;
  status: number;
  url: string;
  data: D;
}

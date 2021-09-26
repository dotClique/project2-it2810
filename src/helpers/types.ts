export type APIResponse<ResponseType> = {
  status: number;
  ok: boolean;
  headers: ResponseType;
  data: ResponseType & ErrorResponse;
};

export type ErrorResponse = {
  errorMsg?: string;
};

export type APIRequestMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type commit = {
  id: string;
  short_id: string;
  title: string;
  author_name: string;
  author_email: string;
  authored_date: string;
  committer_name: string;
  committer_email: string;
  committed_date: string;
  created_at: string;
  message: string;
  parent_ids: string[];
  web_url: string;
  stats: {
    additions: number;
    deletions: number;
    total: number;
  };
};

export type author = {
  name: string;
  num: number;
  feats: number;
  fixes: number;
  active: boolean;
  additions: number;
  deletions: number;
};

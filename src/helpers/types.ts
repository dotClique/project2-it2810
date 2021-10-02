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

export type Commit = {
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

export type Author = {
  name: string;
  num: number;
  feats: number;
  fixes: number;
  active: boolean;
  additions: number;
  deletions: number;
};
export type Branch = {
  name: string;
  merged: boolean;
  default: boolean;
  developers_can_push: boolean;
  can_push: true;
  web_url: string;
  commit: Commit;
};

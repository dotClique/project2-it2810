export type APIResponse<ResponseType> = {
  status: number;
  ok: boolean;
  headers: ResponseType;
  data: ResponseType & ErrorResponse;
  headers: Headers;
};

export type BarDataItem = {
  barValue: number;
  barLabel: string;
};

export type PieDataItem = {
  commitType: string;
  val: number;
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

export type CommitAuthor = {
  name: string;
  num: number;
  feats: number;
  fixes: number;
  active: boolean;
  additions: number;
  deletions: number;
};

type StateGL = 'active' | 'inactive'; // The GitLab "state" attribute option (only sure about "active", do not know if "incative" is a state)

type Milestone = {
  id: number;
  iid: number;
  project_id: string;
  title: string;
  description: string;
  state: StateGL;
  created_at: string;
  updated_at: string;
  due_date: string | null;
  start_date: string | null;
  expired: string | null;
  web_url: string;
};

type IssueAuthor = {
  id: number;
  name: string;
  username: string;
  state: StateGL;
  avatar_url: string;
  web_url: string;
};

type TimeStats = {
  time_estimate: number;
  total_time_spent: number;
  human_time_estimate: null;
  human_total_time_spent: null;
};

type TaskCompletionStatus = {
  count: number;
  completed_count: number;
};

type Links_ = {
  self: string;
  notes: string;
  award_emoji: string;
  project: string;
};

type References = {
  short: string; // On the form # + number, ex: #18
  relative: string;
  full: string;
};

export type Issue = {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: StateGL;
  created_at: string;
  updated_at: string;
  closed_at: string;
  closed_by: string;
  labels: string[];
  milestone: Milestone;
  assignees: [];
  author: IssueAuthor;
  type: 'ISSUE';
  assignee: IssueAuthor[];
  user_notes_count: number;
  merge_requests_count: number;
  upvotes: number;
  downvotes: number;
  due_date: string | null;
  confidential: boolean;
  discussion_locked: null;
  issue_type: 'issue';
  web_url: string;
  time_stats: TimeStats;
  task_completion_status: TaskCompletionStatus;
  has_tasks: boolean;
  _links: Links_;
  references: References;
  moved_to_id: null;
  service_desk_reply_to: null;
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

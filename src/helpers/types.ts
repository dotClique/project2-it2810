export type APIResponse<ResponseType> = {
  status: number;
  ok: boolean;
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

export type MergeRequest = {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: string;
  merged_by: IssueAuthor;
  merged_at: string;
  closed_by: IssueAuthor;
  closed_at: string;
  created_at: string;
  updated_at: string;
  target_branch: string;
  source_branch: string;
  upvotes: number;
  downvotes: number;
  author: IssueAuthor;
  assignee: IssueAuthor;
  assignees: IssueAuthor[];
  reviewers: IssueAuthor[];
  source_project_id: number;
  target_project_id: number;
  labels: string[];
  draft: boolean;
  work_in_progress: boolean;
  milestone: Milestone;
  merge_when_pipeline_succeeds: boolean;
  merge_status: string;
  sha: string;
  merge_commit_sha: string;
  squash_commit_sha: string;
  user_notes_count: string;
  discussion_locked: boolean;
  should_remove_source_branch: boolean;
  force_remove_source_branch: boolean;
  web_url: string;
  references: References;
  time_stats: TimeStats;
  squash: boolean;
  task_completion_status: TaskCompletionStatus;
  has_conflicts: boolean;
  blocking_discussions_resolved: boolean;
};

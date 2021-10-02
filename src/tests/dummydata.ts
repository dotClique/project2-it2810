import { Label } from '../helpers/constants';
import { BarDataItem, Issue } from '../helpers/types';

// Other created issues owerwrite this, as most is not used data.
const issueRest: Issue = {
  id: 2,
  iid: 2,
  project_id: 2,
  state: 'active',
  title: 'Some issue',
  description: '',
  created_at: '',
  closed_at: null,
  labels: [''],
  updated_at: '',
  closed_by: '',
  milestone: {
    id: 2,
    iid: 2,
    project_id: '',
    title: '',
    description: '',
    state: 'active',
    created_at: '',
    updated_at: '',
    due_date: '',
    start_date: '',
    expired: '',
    web_url: '',
  },
  assignees: [],
  author: {
    id: 3,
    name: 'hei',
    username: 'hei',
    state: 'active',
    avatar_url: 'hei',
    web_url: 'hei',
  },
  type: 'ISSUE',
  assignee: [],
  user_notes_count: 2,
  merge_requests_count: 2,
  upvotes: 2,
  downvotes: 2,
  due_date: '',
  confidential: false,
  discussion_locked: null,
  issue_type: 'issue',
  web_url: '',
  time_stats: {
    time_estimate: 4,
    total_time_spent: 4,
    human_time_estimate: null,
    human_total_time_spent: null,
  },
  task_completion_status: { count: 5, completed_count: 5 },
  has_tasks: true,
  _links: { self: 'hei', notes: 'hei', award_emoji: 'hei', project: 'hei' },
  references: { short: 'dfsf', relative: 'dfsf', full: 'dfsf' },
  moved_to_id: null,
  service_desk_reply_to: null,
};

/* type IssueMatters = {
  title: string;
  description: string;
  created_at: string;
  closed_at: string;
  labels: string[];
}; */

export const ISSUE_1: Issue = {
  ...issueRest,
  created_at: '"2021-09-09T11:47:21.510+02:00"',
  closed_at: '2021-09-27T13:30:39.518+02:00',
  labels: [Label.API, Label.BROWSER_STORAGE, Label.IMPORTANT],
};

export const ISSUE_2: Issue = {
  ...issueRest,
  created_at: '"2021-09-01T11:47:21.510+02:00"',
  closed_at: '2021-09-10T13:30:39.518+02:00',
  labels: [Label.API],
};

export const ISSUE_3: Issue = {
  ...issueRest,
  created_at: '"2021-09-09T11:47:21.510+02:00"',
  closed_at: '2021-09-11T13:30:39.518+02:00',
  labels: [Label.BROWSER_STORAGE],
};

export const ISSUE_4: Issue = {
  ...issueRest,
  created_at: '"2021-09-08T11:47:21.510+02:00"',
  closed_at: '2021-09-11T13:30:39.518+02:00',
  labels: [Label.API],
};

export const ISSUE_5: Issue = {
  ...issueRest,
  created_at: '"2021-09-08T11:47:21.510+02:00"',
  labels: [Label.BROWSER_STORAGE, Label.IMPORTANT],
};

export const ISSUE_6: Issue = {
  ...issueRest,
  created_at: '"2021-09-08T11:47:21.510+02:00"',
  labels: [Label.IMPORTANT],
};

export const USED_LABELS = [Label.API, Label.BROWSER_STORAGE, Label.IMPORTANT];

export const ALL_ISSUES = [ISSUE_1, ISSUE_2, ISSUE_3, ISSUE_4, ISSUE_5, ISSUE_6];

export const NON_CLOSED_ISSUES = [ISSUE_5, ISSUE_6];

export const NO_DATA: BarDataItem[] = USED_LABELS.reduce((data: BarDataItem[], label) => {
  return [
    ...data,
    {
      barLabel: label,
      barValue: 0,
    },
  ];
}, []);

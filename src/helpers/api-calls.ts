import { PROJECT_ID } from './constants';
import { APIRequestMethods, APIResponse, Commit, Issue, MergeRequest } from './types';
import { getEnv } from './utils';

/**
 * Default fetch implementation.
 * @param urlPath The url to send a request to.
 * @param method The requst method.
 * @param body The request body.
 * @returns An APIResponse containing the status of the response, if it is ok (200-299),
 * and the request data (or an error message if it not ok).
 */
export const fromAPI = async (
  urlPath: string,
  method: APIRequestMethods,
  body?: unknown,
): Promise<APIResponse<unknown>> => {
  const res = await fetch(
    `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${PROJECT_ID}${urlPath}`,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getEnv('REACT_APP_API_ACCESS_TOKEN')}`,
      },
      body: JSON.stringify(body),
    },
  );
  const data = await res.json();
  return { status: res.status, ok: res.ok, headers: res.headers, data };
};

export const getIssuesFromAPI = async (): Promise<APIResponse<Issue[]>> => {
  return fromAPI('/issues?per_page=100', 'GET') as Promise<APIResponse<Issue[]>>;
};

const getCommitsFromAPIRecursive = async (data: Array<Commit>, page: number) => {
  return fromAPI(`/repository/commits?per_page=101000&page=${page}&with_stats=true`, 'GET').then(
    async (res) => {
      if (res.ok) {
        data = data.concat(res.data as Array<Commit>);
        if (res.headers.get('x-next-page')) {
          await getCommitsFromAPIRecursive(data, page + 1).then((res_data) => {
            return res_data;
          });
        } else {
          return data;
        }
      }
    },
  );
};

export const getAllCommitsFromAPI = async () => {
  const data: Commit[] = [];
  return getCommitsFromAPIRecursive(data, 1);
};

const getMergeRequestsFromAPI = async (data: Array<MergeRequest>, page: number) => {
  return fromAPI('/merge_requests?state=all', 'GET').then(async (res) => {
    if (res.ok) {
      data = data.concat(res.data as Array<MergeRequest>);
      if (res.headers.get('x-next-page')) {
        await getMergeRequestsFromAPI(data, page + 1);
      } else {
        return data;
      }
    }
  });
};

export const getAllMergeRequestsFromAPI = async () => {
  const data: MergeRequest[] = [];
  return getMergeRequestsFromAPI(data, 1);
};

const getCommitByMergeRequestFromAPI = async (
  data: Array<Commit>,
  page: number,
  requestiid: number,
) => {
  return fromAPI(
    '/merge_requests/' + requestiid + '/commits?per_page=101000&page=' + page,
    'GET',
  ).then(async (res) => {
    if (res.ok) {
      data = data.concat(res.data as Array<Commit>);
      if (res.headers.get('x-next-page')) {
        await getCommitByMergeRequestFromAPI(data, page + 1, requestiid);
      } else {
        return data;
      }
    }
  });
};

export const getAllCommitsByMergeRequestFromAPI = async (merges: Array<MergeRequest>) => {
  const commitsByRequest = new Map<number, Array<Commit>>();
  for (let i = 0; i < merges.length; i++) {
    const data: Commit[] = [];
    const something = await getCommitByMergeRequestFromAPI(data, 1, merges[i].iid);
    if (Array.isArray(something)) {
      commitsByRequest.set(merges[i].iid, something);
    }
  }
  return commitsByRequest;
};

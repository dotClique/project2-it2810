import { PROJECT_ID } from './constants';
import { APIRequestMethods, APIResponse, Commit, Issue } from './types';
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
  return fromAPI('/issues', 'GET') as Promise<APIResponse<Issue[]>>;
};

const getCommitsFromAPIRecursive = async (page: number): Promise<Commit[]> => {
  return fromAPI(`/repository/commits?per_page=100&page=${page}&with_stats=true`, 'GET').then(
    async (res) => {
      if (res.ok) {
        if (res.headers.get('x-next-page')) {
          return await getCommitsFromAPIRecursive(page + 1).then((res_data) => {
            return res_data.concat(res.data as Commit[]);
          });
        } else {
          return res.data as Commit[];
        }
      } else {
        return [];
      }
    },
  );
};

export const getAllCommitsFromAPI = async () => {
  return getCommitsFromAPIRecursive(1);
};

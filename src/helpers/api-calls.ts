import { PROJECT_ID } from './constants';
import { APIRequestMethods, APIResponse, commit } from './types';
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
  body?: any,
): Promise<APIResponse<any>> => {
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

export const getIssueBoardsFromAPI = async () => {
  return fromAPI('/boards', 'GET');
};

const getCommitsFromAPIRecursive = async (data: Array<commit>, page: number) => {
  return fromAPI(`/repository/commits?per_page=101000&page=${page}&with_stats=true`, 'GET').then(
    async (res) => {
      if (res.ok) {
        data = data.concat(res.data);
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
  let data: commit[] = [];
  return getCommitsFromAPIRecursive(data, 1);
};

import { PROJECT_ID } from './constants';
import { APIRequestMethods, APIResponse } from './types';
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
  return { status: res.status, ok: res.ok, data };
};

export const getIssueBoardsFromAPI = async () => {
  return fromAPI('/boards', 'GET');
};

export type APIResponse<ResponseType> = {
  status: number;
  ok: boolean;
  data: ResponseType & ErrorResponse;
};

export type ErrorResponse = {
  errorMsg?: string;
};

export type APIRequestMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

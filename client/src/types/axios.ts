/* eslint-disable @typescript-eslint/no-explicit-any */
type method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface options {
  method: method;
  url: string;
  params?: Record<any, any>;
  data?: Record<any, any>;

}

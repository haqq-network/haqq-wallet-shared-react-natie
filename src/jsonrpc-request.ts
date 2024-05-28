import {makeID} from './make-id';

export type JSONRPCErrorMetadata = {
  status?: number;
  statusText?: string;
  headers?: Headers;
  rawBody?: string;
  request?: {
    method: string;
    params: any[];
    endpoint: string;
  };
};
export class JSONRPCError extends Error {
  meta = {} as JSONRPCErrorMetadata;
  constructor(message: string, meta: JSONRPCErrorMetadata = {}) {
    super(message);
    this.name = 'JSONRPCError';
    this.meta = meta;
  }
}

export async function jsonrpcRequest<T>(
  endpoint: string,
  method: string,
  params: any[] = [],
  abortSignal?: AbortSignal,
): Promise<T> {
  const id = makeID(5);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,ru;q=0.8',
      connection: 'keep-alive',
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id,
      method,
      params,
    }),
    signal: abortSignal,
  });

  const text = await response.text();
  let json = {} as any;

  const meta: JSONRPCErrorMetadata = {
    rawBody: text,
    status: response.status,
    headers: response.headers,
    statusText: response.statusText,
    request: {
      method,
      params,
      endpoint,
    },
  };

  if (!response.ok) {
    throw new JSONRPCError('Request failed', meta);
  }

  try {
    json = JSON.parse(text);
  } catch (err) {
    throw new JSONRPCError(text, meta);
  }

  if (json.error) {
    throw new JSONRPCError(json.error.message, meta);
  }

  if (json.id !== id) {
    throw new JSONRPCError('Invalid response id', meta);
  }

  return json.result;
}

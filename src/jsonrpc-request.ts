import {makeID} from './make-id';

export async function jsonrpcRequest<T>(
  endpoint: string,
  method: string,
  params: any[] = [],
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
  });

  const text = await response.text();
  let json = {} as any;

  try {
    json = JSON.parse(text);
  } catch (err) {
    throw new Error(text);
  }

  if (json.error) {
    throw new Error(json.error.message);
  }

  if (json.id !== id) {
    throw new Error('Invalid response id');
  }

  return json.result;
}

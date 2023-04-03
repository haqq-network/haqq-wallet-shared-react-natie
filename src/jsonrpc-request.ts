export async function jsonrpcRequest<T extends object>(
  endpoint: string,
  method: string,
  params: any[] = [],
): Promise<T> {
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
      id: 1,
      method,
      params,
    }),
  });
  const json = await response.json();
  if (json.error) {
    throw new Error(json.error.message);
  }
  return json.result;
}

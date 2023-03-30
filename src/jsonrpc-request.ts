export async function jsonrpcRequest<T extends object>(
  endpoint: string,
  method: string,
  params: any[] = [],
): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      accept: 'application/json, text/plain, */*',
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

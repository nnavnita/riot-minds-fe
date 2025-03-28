interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
}
  
  /**
   * Fetches data from the Strapi API
   * @param endpoint - The endpoint to fetch from
   * @param query - The query parameters to add to the url
   * @param wrappedByKey - The key to unwrap the response from
   * @param wrappedByList - If the response is a list, unwrap it
   * @returns
   */
export async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
    }: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }
  
    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);
  
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    const res = await fetch(url.toString());
    let data = await res.json();
  
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }
  
    if (wrappedByList) {
      data = data[0];
    }
  
    return (data || []) as T;
}

  /**
   * Constructs a string for an asset from the Strapi Upload Store
   */
export function fetchAsset(endpoint: string): string {
  
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  return `${import.meta.env.STRAPI_URL}/${endpoint}`;
}
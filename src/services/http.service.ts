const BASE_URL = "https://www.theaudiodb.com/api/v1/json/123";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public endpoint?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const HttpService = {
  get<T>(endpoint: string) {
    return fetchJson<T>(endpoint);
  },
};

async function fetchJson<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new ApiError(
        response.status,
        mapStatusToMessage(response),
        endpoint,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof Error) {
      throw new ApiError(0, `Network error: ${error.message}`, endpoint);
    }

    throw new ApiError(0, "An unknown error occurred", endpoint);
  }
}

function mapStatusToMessage(response: Response): string {
  const { status, statusText } = response;

  switch (status) {
    case 400:
      return "Bad request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not found";
    case 408:
      return "Request timeout";
    case 429:
      return "Too many requests";
    case 500:
      return "Internal server error";
    case 502:
      return "Bad gateway";
    case 503:
      return "Service unavailable";
    default:
      return statusText || "Unexpected error";
  }
}

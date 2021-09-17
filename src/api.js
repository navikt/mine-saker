import { statusUrl } from "./urls";

const withCredentials = { method: "GET", credentials: "include" };

class FetchError extends Error {
  constructor(response, message) {
    super(message);
    this.response = response;
  }
}

const checkResponse = (response) => {
  if (!response.ok) {
    throw new FetchError(response, response.statusText);
  }
};

const getResponseBody = async (response) => {
  let responseBody = {};
  try {
    responseBody = await response.json();
  } catch (error) {
    return {};
  }
  return responseBody;
};

export const fetchData = async ({ queryKey }) => {
  const response = await fetch(queryKey, withCredentials);
  checkResponse(response);

  return response.json();
};

export const fetchStatus = async () => {
  const response = await fetch(statusUrl, withCredentials);
  checkResponse(response);

  return response.json();
};

export const fetchResponse = async ({ queryKey }) => {
  const response = await fetch(queryKey, withCredentials);

  if (!response.ok && response.status !== 503) {
    throw new FetchError(response, response.statusText);
  }

  const res = {
    statusCode: response.status,
    data: await getResponseBody(response),
  };

  return res;
};

export default fetchData;

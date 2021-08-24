import Axios from 'axios';
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
  //checkResponse(response);
  const res = {
    statusCode: response.status,
    data: await response.json()
  };

  return res;
};

export default fetchData;

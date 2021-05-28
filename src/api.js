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

export default fetchData;

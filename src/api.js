const withCredentials = { method: "GET", credentials: "include" };

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("HTTP request failed");
  }
};

export const fetchData = async ({ queryKey }) => {
  const response = await fetch(queryKey, withCredentials);
  checkResponse(response);

  return response.json();
};

export default fetchData;

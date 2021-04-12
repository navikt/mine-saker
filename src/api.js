import { journalposterURL } from "./urls";

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

export const fetchBySakstemaKode = async (sakstemakode) => {
  const response = await fetch(`${journalposterURL}?sakstemakode=${sakstemakode}`, withCredentials);
  checkResponse(response);

  return response.json();
};

export default fetchData;

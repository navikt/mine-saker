const withCredentials = { method: "GET", credentials: "include" };

const fetchData = (url) => {
  fetch(url, withCredentials)
    .then((result) => result.json())
    .catch((error) => error);
};

export default fetchData;

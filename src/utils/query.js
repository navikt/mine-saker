import { QueryClient } from "react-query";
import { redirectToLogin } from "../components/authentication/Authentication";

const onError = (error) => {
  if (error.response.status === 401) {
    redirectToLogin();
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
      onError,
    },
  },
});

export default queryClient;

import { QueryClient } from "react-query";
import { redirectToLogin } from "../components/authentication/Authentication";
import { mineSakerUrl } from "../urls";

const onError = (error) => {
  if (error.response.status === 401) {
    redirectToLogin(mineSakerUrl);
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

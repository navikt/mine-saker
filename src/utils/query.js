import { QueryClient } from "react-query";
import { mineSakerUrl } from "../urls";
import { redirectToIdPorten } from "./redirect";

const onError = (error) => {
  if (error.response.status === 401) {
    redirectToIdPorten(mineSakerUrl);
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

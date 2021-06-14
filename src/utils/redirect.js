import { fetchStatus } from "../api";
import { loginserviceUrl, loginUrl } from "../urls";

export const redirectToIdPorten = (redirectUri) => {
  // const loginserviceUri = `${loginserviceUrl}&redirect=${redirectUri}`;

  window.location.assign(`${loginserviceUrl}&redirect=${redirectUri}`);
};

const checkAuthenticationStatus = async (redirectUrl) => {
  const status = await fetchStatus();

  if (!status.authenticated) {
    redirectToIdPorten(redirectUrl);
  }
};

export default checkAuthenticationStatus;

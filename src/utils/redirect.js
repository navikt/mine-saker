import { fetchStatus } from "../api";
import { loginUrl } from "../urls";

export const redirectToIdPorten = (redirectUri) => {
  window.location.assign(`${loginUrl}?redirect_uri=${redirectUri}`);
};

const checkAuthenticationStatus = async (redirectUrl) => {
  const status = await fetchStatus();

  if (!status.authenticated) {
    redirectToIdPorten(redirectUrl);
  }
};

export default checkAuthenticationStatus;

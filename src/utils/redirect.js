import { fetchStatus } from "../api";
import { loginserviceUrl, loginUrl } from "../urls";

export const redirectToIdPorten = (redirectUri) => {
  window.location.assign(`${loginUrl}?redirect_uri=${redirectUri}`);
};

export const redirectToLoginService = (redirectUri) => {
  window.location.assign(`${loginserviceUrl}&redirect=${redirectUri}`);
};

const checkAuthenticationStatus = async (redirectUrl) => {
  const status = await fetchStatus();

  if (!status.authenticated) {
    redirectToIdPorten(redirectUrl);
  }
};

export default checkAuthenticationStatus;

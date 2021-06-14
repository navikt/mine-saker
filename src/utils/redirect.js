import { fetchStatus } from "../api";

export const redirectToIdPorten = () => {
  // const loginserviceUri = `${loginserviceUrl}&redirect=${redirectUri}`;
  // window.location.assign(`${loginUrl}?redirect_uri=${loginserviceUri}`);
};

const checkAuthenticationStatus = async (redirectUrl) => {
  const status = await fetchStatus();

  if (!status.authenticated) {
    redirectToIdPorten(redirectUrl);
  }
};

export default checkAuthenticationStatus;

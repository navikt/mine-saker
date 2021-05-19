import React from "react";
import { useQuery } from "react-query";
import fetchData from "../../api";
import { loginUrl, mineSakerUrl, statusUrl } from "../../urls";

const redirectToLogin = () => {
  window.location.assign(`${loginUrl}?redirect_uri=${mineSakerUrl}`);
};

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(statusUrl, fetchData);

  if (isLoading) {
    return null;
  }

  if (!status?.authenticated || isError) {
    redirectToLogin();
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;

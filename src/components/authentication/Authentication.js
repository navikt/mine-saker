import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import fetchData from "../../api";
import { loginUrl, mineSakerUrl, statusUrl } from "../../urls";

const redirectToLogin = () => {
  window.location.assign(`${loginUrl}?redirect_uri=${mineSakerUrl}`);
};

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(statusUrl, fetchData);
  const queryClient = useQueryClient();
  const location = useLocation();

  useEffect(() => {
    queryClient.invalidateQueries(statusUrl);
  }, [location, queryClient]);

  if (isLoading) {
    return null;
  }

  if (!status?.authenticated || isError) {
    redirectToLogin();
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;

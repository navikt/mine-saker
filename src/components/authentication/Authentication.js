import React from "react";
import { useQuery } from "react-query";
import fetchData from "../../api";
import { innloggingsstatusUrl, mineSakerUrl, mineSakerRedirectUrl, statusUrl } from "../../urls";
import { redirectToIdPorten, redirectToLoginService } from "../../utils/redirect";
import Spinner from "../spinner/Spinner";

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(statusUrl, fetchData);
  const { data: innloggingsstatus, isLoadingInnloggingsstatus } = useQuery(innloggingsstatusUrl, fetchData);
  const getPathName = mineSakerRedirectUrl + window.location.pathname;

  if (isLoading || isLoadingInnloggingsstatus) {
    return <Spinner message="Logger inn..." />;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten(getPathName);
    return null;
  }

  if (innloggingsstatus?.authenticated === false && status?.authenticated === true) {
    redirectToLoginService(getPathName);
    return null;
  }

  if (innloggingsstatus?.securityLevel === "3") {
    redirectToLoginService(getPathName);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;

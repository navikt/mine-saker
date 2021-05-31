import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import fetchData from "../../api";
import { mineSakerUrl, statusUrl } from "../../urls";
import { redirectToIdPorten } from "../../utils/redirect";
import Spinner from "../spinner/Spinner";

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(statusUrl, fetchData);
  const queryClient = useQueryClient();
  const location = useLocation();

  useEffect(() => {
    queryClient.invalidateQueries(statusUrl);
  }, [location, queryClient]);

  if (isLoading) {
    return <Spinner message="Logger inn..." />;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten(mineSakerUrl);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;

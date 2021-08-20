import React from "react";
import { Ingress } from "nav-frontend-typografi";
import Panel from "nav-frontend-paneler";
import KorsIkon from "../../assets/KorsIkon";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData, { fetchResponse } from "../../api";
import PageBase from "../pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = () => {
  const { isError } = useQuery(sakstemaerUrl, fetchData);

  const response = useQuery(sakstemaerUrl, fetchResponse);
  const status = 206;

  return (
    <PageBase tittel="Mine Saker" isError={isError} statusCode={status}>
      <Sakstemaliste />
    </PageBase>
  );
};

export default MineSaker;

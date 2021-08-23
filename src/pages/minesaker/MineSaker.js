import React, { useState } from "react";
import { Ingress } from "nav-frontend-typografi";
import Panel from "nav-frontend-paneler";
import KorsIkon from "../../assets/KorsIkon";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData, { getData } from "../../api";
import PageBase from "../pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = ( ) => {
  //const { isError } = useQuery(sakstemaerUrl, fetchData);
  const [fetchStatus, setFetchStatus] = useState();


  return (
    <PageBase tittel="Mine Saker" statusCode={fetchStatus}>
      <Sakstemaliste setStatus={setFetchStatus}/>
    </PageBase>
  );
};

export default MineSaker;

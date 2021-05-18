import React from "react";
import { Ingress } from "nav-frontend-typografi";
import Panel from "nav-frontend-paneler";
import KorsIkon from "../../assets/KorsIkon";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import PageBase from "../../components/pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = () => {
  const { isLoading, isError } = useQuery(sakstemaerUrl, fetchData);

  return (
    <PageBase tittel="Mine Saker" isLoading={isLoading} isError={isError}>
      <Sakstemaliste />
      <Panel className="infopanel">
        <div className="infopanel-box">
          <KorsIkon />
          <Ingress className="infopanel-box__tekst">
            Vi beklager at du ikke får se eller åpnet alle dokumentene dine i saken din.
          </Ingress>
        </div>
      </Panel>
    </PageBase>
  );
};

export default MineSaker;

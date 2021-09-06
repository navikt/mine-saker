import React from "react";
import { useIntl } from "react-intl";
import { Ingress } from "nav-frontend-typografi";
import Panel from "nav-frontend-paneler";
import KorsIkon from "../../assets/KorsIkon";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import PageBase from "../pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = () => {
  const { isError } = useQuery(sakstemaerUrl, fetchData);

  const translate = useIntl();
  const tittel = "mine-saker.hoved.tittel";

  return (
    <PageBase tittel={translate.formatMessage({ id: tittel})} isError={isError}>
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

import React from "react";
import { Ingress, Normaltekst, Sidetittel } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import Panel from "nav-frontend-paneler";
import KorsIkon from "../../assets/KorsIkon";
import Sakstemaliste from "../../components/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import Spinner from "../../components/spinner/Spinner";
import FeilMelding from "../../components/feilmelding/Feilmelding";
import "./MineSaker.less";

const MineSaker = () => {
  const { isLoading, isError } = useQuery(sakstemaerUrl, fetchData);

  if (isLoading) {
    return <Spinner message="Laster inn siden..." />;
  }

  return (
    <div className="mine-saker">
      {isError ? <FeilMelding /> : null}
      <Sidetittel className="mine-saker__tittel">Mine Saker</Sidetittel>
      <Sakstemaliste />
      <div className="mine-saker__infobox">
        <AlertStripe type="info">
          <Normaltekst>Vi beklager at du ikke kan se ...</Normaltekst>
        </AlertStripe>
      </div>
      <Panel>
        <div className="infobox-to">
          <KorsIkon />
          <Ingress className="infobox-to__tekst">
            Vi beklager at du ikke får se eller åpnet alle dokumentene dine i saken din.
          </Ingress>
        </div>
      </Panel>
    </div>
  );
};

export default MineSaker;

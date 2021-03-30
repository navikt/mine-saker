import React from "react";
import { Ingress, Normaltekst, Sidetittel } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import Panel from "nav-frontend-paneler";
import KorsIkon from "../../assets/KorsIkon";
import Sakstemaliste from "../../components/sakstemaliste/Sakstemaliste";
import "./MineSaker.less";

const MineSaker = () => {
  return (
    <div style={{ margin: "0 auto", width: "60%", paddingTop: "2rem" }}>
      <Sidetittel style={{ color: "#3E3832", textAlign: "center", marginBottom: "6.25rem" }}>Mine Saker</Sidetittel>
      <Sakstemaliste />
      <div style={{ paddingTop: "2.25rem", paddingBottom: "2.25rem" }}>
        <AlertStripe type="info">
          <Normaltekst>Vi beklager at du ikke kan se ...</Normaltekst>
        </AlertStripe>
      </div>
      <Panel>
        <div style={{ display: "flex", alignItems: "center" }}>
          <KorsIkon />
          <Ingress style={{ paddingLeft: "0.825em", color: "#0067C5" }}>
            Vi beklager at du ikke får se eller åpnet alle dokumentene dine i saken din.
          </Ingress>
        </div>
      </Panel>
    </div>
  );
};

export default MineSaker;

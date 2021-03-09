import React from "react";
import { Ingress, Normaltekst, Sidetittel, Systemtittel, Undertekst } from "nav-frontend-typografi";
import { HoyreChevron } from "nav-frontend-chevron";
import Veilederpanel from "nav-frontend-veilederpanel";
import AlertStripe from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import Panel from "nav-frontend-paneler";
import SaksIkon from "../../assets/SaksIkon";
import KorsIkon from "../../assets/KorsIkon";
import "./MineSaker.less";

const MineSaker = () => {
  return (
    <div style={{ margin: "0 auto", width: "60%", paddingTop: "2rem" }}>
      <Sidetittel style={{ color: "#3E3832", textAlign: "center", marginBottom: "6.25rem" }}>Mine Saker</Sidetittel>
      <Veilederpanel type="plakat" kompakt svg={<SaksIkon />}>
        <div style={{ paddingBottom: "1em" }}>
          <Systemtittel style={{ color: "#3E3832" }}>Saksoversikt</Systemtittel>
        </div>
        <div style={{ paddingTop: "1.625em", paddingBottom: "0.45em", borderBottom: "1px solid #B7B1A9" }}>
          <Ingress>
            <Lenke href="" style={{ textDecoration: "none" }}>
              <HoyreChevron /> Regnskap utbetaling
            </Lenke>
            <Undertekst style={{ paddingLeft: "1.625em" }}>Sist endret 8. okt 2021</Undertekst>
          </Ingress>
        </div>
        <div style={{ paddingTop: "1.625em", paddingBottom: "0.45em" }}>
          <Ingress>
            <Lenke href="" style={{ textDecoration: "none" }}>
              <HoyreChevron /> Omsorgspenger, pleiepenger og opplæringspenger
            </Lenke>
            <Undertekst style={{ paddingLeft: "1.625em" }}>Sist endret 8. okt 2021</Undertekst>
          </Ingress>
        </div>
        <div style={{ paddingTop: "1.625em", paddingBottom: "0.45em", borderBottom: "1px solid #B7B1A9" }}>
          <Ingress>
            <Lenke href="" style={{ textDecoration: "none" }}>
              <HoyreChevron /> Sykemelding og sykepenger
            </Lenke>
            <Undertekst style={{ paddingLeft: "1.625em" }}>Sist endret 8. okt 2021</Undertekst>
          </Ingress>
        </div>
        <div style={{ paddingTop: "1.625em", paddingBottom: "0.45em", borderBottom: "1px solid #B7B1A9" }}>
          <Ingress>
            <Lenke href="" style={{ textDecoration: "none" }}>
              <HoyreChevron /> Foreldre og svangerskapspenger
            </Lenke>
            <Undertekst style={{ paddingLeft: "1.625em" }}>Sist endret 8. okt 2021</Undertekst>
          </Ingress>
        </div>
        <div style={{ paddingTop: "1.625em", paddingBottom: "0.45em" }}>
          <Ingress>
            <Lenke href="" style={{ textDecoration: "none" }}>
              <HoyreChevron /> Barnetrygd
            </Lenke>
            <Undertekst style={{ paddingLeft: "1.625em" }}>Sist endret 8. okt 2021</Undertekst>
          </Ingress>
        </div>
        <AlertStripe type="advarsel">
          <Normaltekst>Vi jobber for tiden med nye løsninger...</Normaltekst>
        </AlertStripe>
      </Veilederpanel>

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

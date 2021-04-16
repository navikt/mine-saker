import React from "react";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import DokumentIkon from "../../assets/DokumentIkon";
import InformasjoIkon from "../../assets/InformasjonIkon";
import ListeElement from "../liste-element/ListeElement";
import AlertStripe from "nav-frontend-alertstriper";
import "./Dokumentliste.less";

const DokumentListe = ({ journalposter }) => {
  return (
    <React.Fragment>
      <Veilederpanel type="plakat" kompakt svg={<InformasjoIkon />}>
        <div className="panel-tittel">
          <Systemtittel>Om saken</Systemtittel>
        </div>
        <Normaltekst className="om-saken-ingress">
          Her finner du informasjon om saken din. Du har mulighet til å melde fra om endringer eller ettersende
          informasjon som har betydning når NAV skal behandle saken.
        </Normaltekst>
      </Veilederpanel>
      <Veilederpanel type="plakat" kompakt svg={<DokumentIkon />}>
        <div className="panel-tittel">
          <Systemtittel>Dokumentliste</Systemtittel>
        </div>
        {journalposter.map((journalpost) => {
          return <ListeElement key={journalpost.journalpostId} sakstema={journalpost.tittel} link={"..."} />;
        })}
        <AlertStripe type="info">
          <Normaltekst>Vi beklager at du ikke kan se alle dokumentene dine i saken din.</Normaltekst>
        </AlertStripe>
      </Veilederpanel>
    </React.Fragment>
  );
};

export default DokumentListe;

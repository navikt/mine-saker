import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import DokumentIkon from "../../../assets/DokumentIkon";
import InformasjoIkon from "../../../assets/InformasjonIkon";
import Lenkeliste from "../lenkeliste/Lenkeliste";
import "./Dokumentliste.less";

const toListElements = (journalpost) => {
  if (journalpost.harVedlegg) {
    return <ListeElement type="vedlegg" key={journalpost.journalpostId} journalpost={journalpost} />;
  } else {
    return journalpost.dokumenter.map((dokument) => (
      <ListeElement type="dokument" key={journalpost.journalpostId} journalpost={journalpost} dokument={dokument} />
    ));
  }
};

const DokumentListe = ({ journalposter }) => {
  return (
    <React.Fragment>
      <section>
        <Liste tittel="Om saken" classname="panel" style={{ marginBottom: "20px" }} ikon={<InformasjoIkon />}>
          <Normaltekst className="om-saken-ingress">
            Her finner du informasjon om saken din. Du har mulighet til å melde fra om endringer eller ettersende
            informasjon som har betydning når NAV skal behandle saken.
          </Normaltekst>
          <Lenkeliste />
        </Liste>
      </section>
      <section id="dokumentliste">
        <Liste tittel="Dokumentliste" classname="panel" ikon={<DokumentIkon />}>
          {journalposter.map(toListElements)}
          <AlertStripe type="info" className="info-box">
            <Normaltekst>Vi beklager at du ikke kan se alle dokumentene dine i saken din.</Normaltekst>
          </AlertStripe>
        </Liste>
      </section>
    </React.Fragment>
  );
};

export default DokumentListe;

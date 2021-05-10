import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import DokumentIkon from "../../../assets/DokumentIkon";
import InformasjoIkon from "../../../assets/InformasjonIkon";
import Lenkeliste from "../../om-saken/Lenkeliste";
import "./Dokumentliste.less";

const toListElements = (journalpost) => {
  if (journalpost.harVedlegg) {
    return <ListeElement type="vedlegg" key={journalpost.journalpostId} journalpost={journalpost} />;
  } else {
    return journalpost.arkiverteDokumenter.map((dokument) => (
      <ListeElement type="dokument" key={journalpost.journalpostId} journalpost={journalpost} dokument={dokument} />
    ));
  }
};

const DokumentListe = ({ journalposter }) => {
  return (
    <React.Fragment>
      <Liste tittel="Om saken" classname="panel" ikon={<InformasjoIkon />}>
        <Normaltekst className="om-saken-ingress">
          Her finner du informasjon om saken din. Du har mulighet til å melde fra om endringer eller ettersende
          informasjon som har betydning når NAV skal behandle saken.
        </Normaltekst>
        <Lenkeliste />
      </Liste>
      <Liste tittel="Dokumentliste" classname="panel" ikon={<DokumentIkon />}>
        {journalposter.map(toListElements)}
        <AlertStripe type="info">
          <Normaltekst>Vi beklager at du ikke kan se alle dokumentene dine i saken din.</Normaltekst>
        </AlertStripe>
      </Liste>
    </React.Fragment>
  );
};

export default DokumentListe;

import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import VedleggslisteItem from "./VedleggslisteItem";
import "./Vedleggsliste.less";

const Vedleggsliste = ({ journalpost }) => {
  const byVedlegg = (dokument) => !dokument.erHoveddokument;

  return (
    <React.Fragment>
      <Normaltekst>Med følgende vedlegg:</Normaltekst>
      <ul className="vedleggsliste">
        {journalpost.arkiverteDokumenter.filter(byVedlegg).map((dokument) => {
          return (
            <VedleggslisteItem
              key={dokument.dokumentInfoId}
              dokumentId={dokument.dokumentInfoId}
              journalpostId={journalpost.journalpostId}
            >
              {dokument.tittel}
            </VedleggslisteItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Vedleggsliste;

import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import VedleggslisteItem from "./VedleggslisteItem";
import "./Vedleggsliste.less";
import JournalpostType from "../../../types/JournalpostType";

const Vedleggsliste = ({ journalpost }) => {
  const byVedlegg = (dokument) => dokument.dokumenttype === "VEDLEGG";

  return (
    <React.Fragment>
      <Normaltekst>Med følgende vedlegg:</Normaltekst>
      <ul className="vedleggsliste">
        {journalpost.dokumenter.filter(byVedlegg).map((dokument) => {
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

Vedleggsliste.propTypes = {
  journalpost: JournalpostType,
};

export default Vedleggsliste;

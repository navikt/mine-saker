import React from "react";
import PropTypes from "prop-types";
import { Normaltekst } from "nav-frontend-typografi";
import VedleggslisteItem from "./VedleggslisteItem";
import "./Vedleggsliste.less";

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

Vedleggsliste.prototype = {
  journalpost: PropTypes.object.isRequired,
};

export default Vedleggsliste;

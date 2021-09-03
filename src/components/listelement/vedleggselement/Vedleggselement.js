import React from "react";
import PropTypes from "prop-types";

import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import Vedleggsliste from "../../liste/vedleggsliste/Vedleggsliste";
import "./Vedleggselement.less";

const Vedleggselement = ({ journalpost }) => {
  const byHoveddokument = (dokument) => dokument.dokumenttype === "HOVED";
  const hoveddokument = journalpost.dokumenter.find(byHoveddokument);

  return (
    <React.Fragment>
      <ChevronlenkeBase dato={journalpost.sisteEndret} hideBorder>
        <Dokumentlenke
          journalpostId={journalpost.journalpostId}
          tekst={journalpost.tittel}
          dokumentId={hoveddokument.dokumentInfoId}
        />
      </ChevronlenkeBase>
      <div className="vedleggselement">
        <Vedleggsliste journalpost={journalpost} />
      </div>
    </React.Fragment>
  );
};

Vedleggselement.propTypes = {
  journalpost: PropTypes.object,
};

export default Vedleggselement;

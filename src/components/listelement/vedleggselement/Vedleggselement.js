import React from "react";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import Vedleggsliste from "../../liste/vedleggsliste/Vedleggsliste";
import "./Vedleggselement.less";

const Vedleggselement = ({ journalpost }) => {
  const byErHoveddokument = (dokument) => dokument.dokumenttype === "HOVED";
  const hoveddokument = journalpost.dokumenter.find(byErHoveddokument);

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

export default Vedleggselement;

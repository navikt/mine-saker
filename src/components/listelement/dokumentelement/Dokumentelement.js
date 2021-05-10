import React from "react";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";

const Dokumentelement = ({ journalpost, dokument }) => {
  return (
    <ChevronlenkeBase dato={journalpost.sisteEndret}>
      <Dokumentlenke
        journalpostId={journalpost.journalpostId}
        tekst={dokument.tittel}
        dokumentId={dokument.dokumentInfoId}
      />
    </ChevronlenkeBase>
  );
};

export default Dokumentelement;

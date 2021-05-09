import React from "react";
import PropTypes from "prop-types";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";

const Dokumentelement = ({ journalpostId, dokumentId, tekst, dato }) => {
  return (
    <ChevronlenkeBase dato={dato}>
      <Dokumentlenke journalpostId={journalpostId} tekst={tekst} dokumentId={dokumentId} />
    </ChevronlenkeBase>
  );
};

Dokumentelement.propTypes = {
  journalpostId: PropTypes.string.isRequired,
  dokumentId: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
  dato: PropTypes.string.isRequired,
};

export default Dokumentelement;

import React from "react";
import PropTypes from "prop-types";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Sakstemalenke from "../../chevronlenke/sakstemalenke/Sakstemalenke";

const Sakstemaelement = ({ tekst, dato, kode }) => {
  return (
    <ChevronlenkeBase dato={dato}>
      <Sakstemalenke tekst={tekst} kode={kode} />
    </ChevronlenkeBase>
  );
};

Sakstemaelement.propTypes = {
  tekst: PropTypes.string.isRequired,
  dato: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

export default Sakstemaelement;
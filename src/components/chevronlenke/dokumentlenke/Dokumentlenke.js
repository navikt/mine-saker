import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import Lenke from "nav-frontend-lenker";
import { dokumentURL } from "../../../urls";
import "./Dokumentlenke.less";

const Dokumentlenke = ({ sakstema, journalpostId, dokumentId }) => {
  return (
    <Lenke className="dokumentlenke" href={`${dokumentURL}/${journalpostId}/${dokumentId}`}>
      <HoyreChevron /> {sakstema}
    </Lenke>
  );
};

Dokumentlenke.propTypes = {
  sakstema: PropTypes.string.isRequired,
  journalpostId: PropTypes.string.isRequired,
};

export default Dokumentlenke;

import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import Lenke from "nav-frontend-lenker";
import { dokumentURL } from "../../../urls";
import "./DokumentLenke.less";

const DokumentLenke = ({ sakstema, journalpostId, dokumentId }) => {
  return (
    <Lenke className="dokumentliste-lenke" href={`${dokumentURL}/${journalpostId}/${dokumentId}`}>
      <HoyreChevron /> {sakstema}
    </Lenke>
  );
};

DokumentLenke.propTypes = {
  sakstema: PropTypes.string.isRequired,
  journalpostId: PropTypes.string.isRequired,
};

export default DokumentLenke;

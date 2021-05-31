import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import Lenke from "nav-frontend-lenker";
import { dokumentUrl } from "../../../urls";
import checkAuthenticationStatus from "../../../utils/redirect";
import "./Dokumentlenke.less";

const Dokumentlenke = ({ tekst, journalpostId, dokumentId }) => {
  const url = `${dokumentUrl}/${journalpostId}/${dokumentId}`;

  const onClick = async () => {
    await checkAuthenticationStatus(url);
  };

  return (
    <Lenke onClick={onClick} className="dokumentlenke" href={url} target="_blank" rel="noopener noreferrer">
      <HoyreChevron className="dokumentlenke__chevron" /> {tekst}
    </Lenke>
  );
};

Dokumentlenke.propTypes = {
  tekst: PropTypes.string.isRequired,
  journalpostId: PropTypes.string.isRequired,
};

export default Dokumentlenke;

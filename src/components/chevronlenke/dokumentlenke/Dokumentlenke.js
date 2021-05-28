import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import Lenke from "nav-frontend-lenker";
import { dokumentUrl } from "../../../urls";
import { redirectToLogin } from "../../authentication/Authentication";
import { fetchStatus } from "../../../api";
import "./Dokumentlenke.less";

const Dokumentlenke = ({ tekst, journalpostId, dokumentId }) => {
  const url = `${dokumentUrl}/${journalpostId}/${dokumentId}`;

  const onClick = async () => {
    const status = await fetchStatus();

    if (!status.authenticated) {
      redirectToLogin(url);
    }
  };

  return (
    <Lenke onClick={onClick} className="dokumentlenke" href={url}>
      <HoyreChevron className="dokumentlenke__chevron" /> {tekst}
    </Lenke>
  );
};

Dokumentlenke.propTypes = {
  tekst: PropTypes.string.isRequired,
  journalpostId: PropTypes.string.isRequired,
};

export default Dokumentlenke;

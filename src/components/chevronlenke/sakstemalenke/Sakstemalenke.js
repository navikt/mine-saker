import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import { mineSakerUrl } from "../../../urls";
import checkAuthenticationStatus from "../../../utils/redirect";
import "nav-frontend-lenker";
import "./Sakstemalenke.less";

const Sakstemalenke = ({ tekst, kode }) => {
  const redirectUrl = `${mineSakerUrl}/tema/${kode}`;

  const onClick = async () => {
    await checkAuthenticationStatus(redirectUrl);
  };

  return (
    <Link className="lenke sakstemalenke" onClick={onClick} to={`/person/mine-saker/tema/${kode}`}>
      <HoyreChevron className="sakstemalenke__chevron" /> {tekst}
    </Link>
  );
};

Sakstemalenke.propTypes = {
  tekst: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

export default Sakstemalenke;

import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import "nav-frontend-lenker";
import "./Sakstemalenke.less";

const Sakstemalenke = ({ sakstema, kode }) => {
  return (
    <Link className="lenke sakstemalenke" to={`/person/mine-saker/tema/${kode}`}>
      <HoyreChevron /> {sakstema}
    </Link>
  );
};

Sakstemalenke.propTypes = {
  sakstema: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

export default Sakstemalenke;

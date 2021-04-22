import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import "nav-frontend-lenker";
import "./SakstemaLenke.less";

const SakstemaLenke = ({ sakstema, kode }) => {
  return (
    <Link className="lenke sakstema-lenke" to={`/person/mine-saker/tema/${kode}`}>
      <HoyreChevron /> {sakstema}
    </Link>
  );
};

SakstemaLenke.propTypes = {
  sakstema: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

export default SakstemaLenke;

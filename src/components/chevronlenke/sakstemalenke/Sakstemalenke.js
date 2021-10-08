import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import Lenke from "nav-frontend-lenker";
import { mineSakerUrl } from "../../../urls";
import "nav-frontend-lenker";
import "./Sakstemalenke.less";

const Sakstemalenke = ({ tekst, kode, sakstemaUrl }) => {
  if (sakstemaUrl === `${mineSakerUrl}/tema/${kode}`) {
    return (
      <Link className="lenke sakstemalenke" to={`/mine-saker/tema/${kode}`}>
        <HoyreChevron className="sakstemalenke__chevron" /> {tekst}
      </Link>
    );
  }

  return (
    <Lenke className="sakstemalenke" href={sakstemaUrl}>
      <HoyreChevron className="sakstemalenke__chevron" /> {tekst}
    </Lenke>
  );
};

Sakstemalenke.propTypes = {
  tekst: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
  sakstemaUrl: PropTypes.string.isRequired,
};

export default Sakstemalenke;

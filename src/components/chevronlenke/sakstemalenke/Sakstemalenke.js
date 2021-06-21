import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import "nav-frontend-lenker";
import "./Sakstemalenke.less";
import Lenke from "nav-frontend-lenker";

const Sakstemalenke = ({ tekst, kode }) => {
  if (kode === "KOM") {
    const url = "https://www-q1.dev.nav.no/sosialhjelp/innsyn";

    return (
      <Lenke className="dokumentlenke" href={url}>
        <HoyreChevron className="dokumentlenke__chevron" /> {tekst}
      </Lenke>
    );
  }

  return (
    <Link className="lenke sakstemalenke" to={`/person/mine-saker/tema/${kode}`}>
      <HoyreChevron className="sakstemalenke__chevron" /> {tekst}
    </Link>
  );
};

Sakstemalenke.propTypes = {
  tekst: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

export default Sakstemalenke;

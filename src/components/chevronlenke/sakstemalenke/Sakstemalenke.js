import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import Lenke from "nav-frontend-lenker";
import { dagpengerUrl, sosialhjelpUrl } from "../../../urls";
import "nav-frontend-lenker";
import "./Sakstemalenke.less";

const externalUrls = {
  KOM: sosialhjelpUrl,
  DAG: dagpengerUrl,
};

const Sakstemalenke = ({ tekst, kode }) => {
  if (kode === "KOM" || kode === "DAG") {
    return (
      <Lenke className="sakstemalenke" href={externalUrls[kode]}>
        <HoyreChevron className="sakstemalenke__chevron" /> {tekst}
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

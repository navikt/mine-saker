import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Lenke from "nav-frontend-lenker";
import { mineSakerUrl } from "../../../urls";
import { logAmplitudeEventNavigerTilSakstema, listOfComponentNames, listOfActions } from "../../../utils/amplitude";
import "nav-frontend-lenker";
import "./Sakstemalenke.less";

const Sakstemalenke = ({ tekst, kode, sakstemaUrl }) => {
  if (sakstemaUrl === `${mineSakerUrl}/tema/${kode}`) {
    return (
      <Link
        className="lenke sakstemalenke"
        to={`/mine-saker/tema/${kode}`}
        tabIndex={-1}
        onClick={() => {
          logAmplitudeEventNavigerTilSakstema(
            listOfComponentNames.sakstemaListe,
            tekst,
            listOfActions.trykkPaaSakstema
          );
        }}
        onKeyPress={() => {
          logAmplitudeEventNavigerTilSakstema(
            listOfComponentNames.sakstemaListe,
            tekst,
            listOfActions.trykkPaaSakstema
          );
        }}
      >
        {tekst} 
      </Link>
    );
  }

  return (
    <Lenke
      className="sakstemalenke"
      href={sakstemaUrl}
      tabIndex={-1}
      onClick={() => {
        logAmplitudeEventNavigerTilSakstema(listOfComponentNames.sakstemaListe, tekst, listOfActions.trykkPaaSakstema);
      }}
      onKeyPress={() => {
        logAmplitudeEventNavigerTilSakstema(listOfComponentNames.sakstemaListe, tekst, listOfActions.trykkPaaSakstema);
      }}
    >
      {tekst}
    </Lenke>
  );
};

Sakstemalenke.propTypes = {
  tekst: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
  sakstemaUrl: PropTypes.string.isRequired,
};

export default Sakstemalenke;

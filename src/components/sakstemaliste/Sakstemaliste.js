import React from "react";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import SaksIkon from "../../assets/SaksIkon";
import AlertStripe from "nav-frontend-alertstriper";
import Veilederpanel from "nav-frontend-veilederpanel";
import ListeElement from "../liste-element/ListeElement";

const Sakstemaliste = () => (
  <Veilederpanel type="plakat" kompakt svg={<SaksIkon />}>
    <div style={{ paddingBottom: "1em" }}>
      <Systemtittel style={{ color: "#3E3832" }}>Saksoversikt</Systemtittel>
    </div>
    <ListeElement sakstema={"Regnskap utbetaling"} link={"https://..."} />
    <ListeElement sakstema={"Omsorgspenger, pleiepenger og opplæringspenger"} link={"https://..."} />
    <ListeElement sakstema={"Sykemelding og sykepenger"} link={"https://..."} />
    <ListeElement sakstema={"Foreldre og svangerskapspenger"} link={"https://..."} />
    <ListeElement sakstema={"Barnetrygd"} link={"https://..."} />
    <AlertStripe type="advarsel">
      <Normaltekst>
        Vi jobber for tiden med nye løsninger for innsyn i sak, og det er ikke sikkert alle sakene dine vies her akkurat
        nå. Vi beklager dette, ta kontakt dersom du lurer på noe.
      </Normaltekst>
    </AlertStripe>
  </Veilederpanel>
);

Sakstemaliste.propTypes = {
  tittelId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Sakstemaliste.defaultProps = {
  className: "",
};

export default Sakstemaliste;

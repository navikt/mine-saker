import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import Lenke from "nav-frontend-lenker";
import "./ListeElement.less";

const ListeElement = ({ sakstema, kode }) => {
  return (
    <div className="liste-element">
      <Ingress>
        <Link className="lenke liste-element__lenke" to={`/person/mine-saker/tema/${kode}`}>
          <HoyreChevron /> {sakstema}
        </Link>
        <Undertekst className="liste-element__tekst">Sist endret 8. okt 2021</Undertekst>
      </Ingress>
    </div>
  );
};

ListeElement.propTypes = {
  sakstema: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

export default ListeElement;

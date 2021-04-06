import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import "./ListeElement.less";

const ListeElement = ({ sakstema, link }) => (
  <div className="liste-element">
    <Ingress>
      <Lenke href={link} className="liste-element__lenke">
        <HoyreChevron /> {sakstema}
      </Lenke>
      <Undertekst className="liste-element__tekst">Sist endret 8. okt 2021</Undertekst>
    </Ingress>
  </div>
);

ListeElement.propTypes = {
  sakstema: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ListeElement;

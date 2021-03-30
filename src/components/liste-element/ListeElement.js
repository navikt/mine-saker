import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";

const ListeElement = ({ sakstema, link }) => (
  <div style={{ paddingTop: "1.625em", paddingBottom: "0.45em", borderBottom: "1px solid #B7B1A9" }}>
    <Ingress>
      <Lenke href={link} style={{ textDecoration: "none" }}>
        <HoyreChevron /> {sakstema}
      </Lenke>
      <Undertekst style={{ paddingLeft: "1.625em" }}>Sist endret 8. okt 2021</Undertekst>
    </Ingress>
  </div>
);

ListeElement.propTypes = {
  sakstema: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ListeElement;

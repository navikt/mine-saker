import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { Link } from "react-router-dom";
import "nav-frontend-lenker";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/nb";
import "./ListeElement.less";

const ListeElement = ({ sakstema, kode, dato }) => {
  dayjs.extend(localeData);
  dayjs.locale("nb");

  const formattedDate = dayjs(dato).format("DD. MMMM YYYY");

  return (
    <div className="liste-element">
      <Ingress>
        <Link className="lenke liste-element__lenke" to={`/person/mine-saker/tema/${kode}`}>
          <HoyreChevron /> {sakstema}
        </Link>
        <Undertekst className="liste-element__tekst">{`Sist endret ${formattedDate}`}</Undertekst>
      </Ingress>
    </div>
  );
};

ListeElement.propTypes = {
  sakstema: PropTypes.string.isRequired,
  kode: PropTypes.string,
  dato: PropTypes.string.isRequired,
};

ListeElement.defaultProps = {
  kode: "",
};

export default ListeElement;

import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import "nav-frontend-lenker";
import { formatToReadableDate, setLocaleDate } from "../../utils/date";
import "./ChevronlenkeBase.less";

const ChevronlenkeBase = ({ dato, hideBorder, children }) => {
  setLocaleDate();

  return (
    <div className={`chevronlenke-base ${hideBorder ? "" : "chevronlenke-base__border"}`}>
      <Ingress>
        {children}
      </Ingress>
      <Undertekst className="chevronlenke-base__tekst">{`Sist endret ${formatToReadableDate(dato)}`}</Undertekst>
    </div>
  );
};

ChevronlenkeBase.propTypes = {
  dato: PropTypes.string.isRequired,
};

export default ChevronlenkeBase;

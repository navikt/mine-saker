import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import "nav-frontend-lenker";
import { formatToDate, setLocaleDate } from "../../utils/date";
import "./ChevronlenkeBase.less";

const ChevronlenkeBase = ({ dato, hideBorder, children }) => {
  setLocaleDate();

  return (
    <div className={`chevronlenke-base ${hideBorder ? "" : "chevronlenke-base__border"}`}>
      <Ingress>
        {children}
        <Undertekst className="chevronlenke-base__tekst">{`Sist endret ${formatToDate(dato)}`}</Undertekst>
      </Ingress>
    </div>
  );
};

ChevronlenkeBase.propTypes = {
  dato: PropTypes.string.isRequired,
};

export default ChevronlenkeBase;

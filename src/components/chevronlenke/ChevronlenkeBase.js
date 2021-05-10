import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import PropTypes from "prop-types";
import "nav-frontend-lenker";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/nb";
import "./ChevronlenkeBase.less";

const ChevronlenkeBase = ({ dato, hideBorder, children }) => {
  dayjs.extend(localeData);
  dayjs.locale("nb");

  const formattedDate = dayjs(dato).format("DD. MMMM YYYY");

  return (
    <div className={`chevronlenke-base ${hideBorder ? "" : "chevronlenke-base__border"}`}>
      <Ingress>
        {children}
        <Undertekst className="chevronlenke-base__tekst">{`Sist endret ${formattedDate}`}</Undertekst>
      </Ingress>
    </div>
  );
};

ChevronlenkeBase.propTypes = {
  dato: PropTypes.string.isRequired,
};

export default ChevronlenkeBase;

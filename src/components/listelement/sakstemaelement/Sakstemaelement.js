import React, { useState } from "react";
import PropTypes from "prop-types";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import Sakstemalenke from "../../chevronlenke/sakstemalenke/Sakstemalenke";
import { formatToReadableDate, setLocaleDate } from "../../../utils/date";
import { HoyreChevron } from "nav-frontend-chevron";
import "./Sakstemaelement.less";


const Sakstemaelement = ({ tekst, dato, kode, sakstemaUrl }) => {
  const [addClassname, setAddClassname] = useState(false);

  const onEnter = () => {
    setAddClassname(true);
  }
  
  const onLeave = () => {
    setAddClassname(false);
  }

  setLocaleDate();

  return (
    <a className="sakstemalenke-wrapper" href={sakstemaUrl}>
      <div className={"sakstemalenke-base sakstemalenke-base__border"} 
        role="button" 
        tabIndex={0}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}>
        <div className="wrapper" >
          <Ingress>
            <Sakstemalenke 
            tekst={tekst} 
            kode={kode} 
            sakstemaUrl={sakstemaUrl}
            />
          </Ingress>
          <Undertekst className="sakstemalenke-base__tekst">{`Sist endret ${formatToReadableDate(dato)}`}</Undertekst>
        </div>
        <HoyreChevron className={`sakstemalenke__chevron ${addClassname ? "sakstemalenke_chevron_animation" : ""}`} /> 
      </div>
    </a>
  );
};

Sakstemaelement.propTypes = {
  tekst: PropTypes.string.isRequired,
  dato: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
  sakstemaUrl: PropTypes.string.isRequired,
};

export default Sakstemaelement;

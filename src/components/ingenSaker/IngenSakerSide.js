import React, { useState } from "react";
import { Link } from "react-router-dom";
import "nav-frontend-knapper-style";
import Dinosaur from "../../assets/Dinosaur";
import { dittNavUrl } from "../../urls";

import "./IngenSakerSide.less";
import { useIntl } from "react-intl";
import { listOfActions, listOfComponentNames, logAmplitudeEvent } from "../../utils/amplitude";

const IngenSakerSide = ({ ingress, useBothButtons }) => {
  const [showSecondButton] = useState(useBothButtons);

  const translate = useIntl();
  const saksoversiktKnappTekst = "ingen-saker.saksoversikt-knapp";
  const dittNavKnappTekst = "ingen-saker.ditt-nav-knapp";

  return (
    <section className="ingen-saker-wrapper">
      <h2 className="ingen-saker-ingress">{ingress}</h2>
      <section className="button-section">
        {showSecondButton ? (
          <Link 
            to="/mine-saker/" 
            className="knapp knapp--hoved" 
            onClick={() => logAmplitudeEvent(
              listOfComponentNames.ingenSakerSide.tilMineSakerKnapp, 
              listOfActions.ingenSakerSide.tilMineSakerKnapp)
            }
          >
            {translate.formatMessage({id: saksoversiktKnappTekst, defaultMessage: "Gå til Mine saker"})}
          </Link>
        ) : null}
        <a 
          href={dittNavUrl} 
          className="knapp"
          onClick={() => logAmplitudeEvent(
            listOfComponentNames.ingenSakerSide.tilForsidenDittnavKnapp, 
            listOfActions.ingenSakerSide.tilForsidenDittnavKnapp)
          }
        >
          {translate.formatMessage({id: dittNavKnappTekst, defaultMessage: "Gå til forsiden av Ditt NAV"})}      
        </a>
      </section>
      <section className="dinosaur-wrapper">
        <Dinosaur/>
      </section>
    </section>
  );
};

export default IngenSakerSide;

import React from "react";
import { Element, Normaltekst } from "nav-frontend-typografi";
import { AlertStripeInfo } from "nav-frontend-alertstriper";
import "./HotjarTilbakemeldingsboks.less"
import { useIntl } from "react-intl";
import { listOfActions, listOfComponentNames, logAmplitudeEvent } from "../../utils/amplitude";

const HotjarTilbakemeldingsboks = () => {
    
    const triggerHotJar = () => {
    window.hj("trigger", "trigger-tilbakemelding")
    logAmplitudeEvent(listOfComponentNames.hotjarComponent, listOfActions.aapnetHotjarTilbakemeldingsboks)
    };

    const translate = useIntl();
    const tittel = "hotjar.tittel";
    const ingress = "hotjar.ingress";
    const tilbakemelding = "hotjar.tilbakemelding"

    return(
        <div className="tilbakemelding-wrapper">
        <AlertStripeInfo>
          <Element>{translate.formatMessage({ id: tittel, defaultMessage: "Noe som mangler, er feil eller som er vanskelig å forstå?"})}</Element>
  
          <Normaltekst style={{ display: "flex", flexDirection: "row" }}>
            {translate.formatMessage({ 
              id: ingress, 
              defaultMessage: "Da vil vi veldig gjerne høre fra deg!"})}
            <div 
              style={{marginLeft: "0.5em"}}
              role="button"
              className="tilbakemelding_knapp"
              onClick={triggerHotJar}
              onKeyPress={triggerHotJar}
              tabIndex={0}
            >
              {translate.formatMessage({ 
                  id: tilbakemelding, 
                  defaultMessage: "Gi oss tilbakemelding"})}
            </div>
          </Normaltekst>
        </AlertStripeInfo>
      </div>
    )
}

export default HotjarTilbakemeldingsboks;
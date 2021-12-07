import React from "react";
import { Element } from "nav-frontend-typografi";
import { AlertStripeInfo } from "nav-frontend-alertstriper";
import "./HotjarTilbakemeldingsboks.less";
import { useIntl } from "react-intl";
import { listOfActions, listOfComponentNames, logAmplitudeEvent } from "../../utils/amplitude";

const HotjarTilbakemeldingsboks = () => {
  const triggerHotJar = () => {
    window.hj("trigger", "trigger-tilbakemelding");
    logAmplitudeEvent(listOfComponentNames.hotjarComponent, listOfActions.aapnetHotjarTilbakemeldingsboks);
  };

  const translate = useIntl();
  const tittel = "hotjar.tittel";
  const tilbakemelding = "hotjar.tilbakemelding";

  return (
    <div className="tilbakemelding-wrapper">
      <AlertStripeInfo>
        <Element className="ingress">
          {translate.formatMessage({
            id: tittel,
            defaultMessage: "Vi vil gjerne høre hva du synes om den nye saksoversikten.",
          })}
        </Element>
        <div className="tekst-med-lenke">
          <div
            role="button"
            className="tilbakemelding_knapp"
            onClick={triggerHotJar}
            onKeyPress={triggerHotJar}
            tabIndex={0}
          >
            {translate.formatMessage({
              id: tilbakemelding,
              defaultMessage: "Gi oss tilbakemelding på den nye nettsiden",
            })}
          </div>
        </div>
      </AlertStripeInfo>
    </div>
  );
};

export default HotjarTilbakemeldingsboks;

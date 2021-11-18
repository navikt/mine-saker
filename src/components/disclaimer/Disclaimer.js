import React from "react";
import AlertStripe from "nav-frontend-alertstriper";
import { Normaltekst } from "nav-frontend-typografi";
import { useIntl } from "react-intl";
import Lenke from "nav-frontend-lenker";
import { gamleSaksoversiktUrl,gamleSaksoversiktTemaBidragUrl } from "../../urls";
import "./Disclaimer.less";
import { listOfActions, listOfComponentNames, logAmplitudeEvent } from "../../utils/amplitude";

const Disclaimer = () => {
  const translate = useIntl();
  
  const tekst = "disclaimer.tekst";
  const lenketekst = "disclaimer.lenketekst";
  const tekstBidrag = "disclaimer.tekst-bidrag";
  const lenketekstBidrag = "disclaimer.lenketekst-bidrag";

  

  return (
    <div className="alertbox">
      <AlertStripe type="info" className="infomelding" style={{ display: "flex", flexDirection: "row" }}>
        <Normaltekst>
          {translate.formatMessage({
            id: tekst,
            defaultMessage:
              "Denne siden er under utvikling, og er ikke helt ferdig enda. Hvis du ikke finner sakene eller dokumentene du leter etter kan du forsøke ",
          })}
          <Lenke
            href={gamleSaksoversiktUrl}
            onClick={() => logAmplitudeEvent(listOfComponentNames.disclaimerLenke.tilGamleSaksoversikt, listOfActions.trykkPaaLenke)}
          >
            {translate.formatMessage({
              id: lenketekst,
              defaultMessage: "den tidligere versjonen.",
            })}
          </Lenke>
        </Normaltekst>
        <Normaltekst>
        {translate.formatMessage({
            id: tekstBidrag,
            defaultMessage:
              "Leter du etter bidragsaker, da kan du forsøke ",
          })}
          <Lenke
            href={gamleSaksoversiktTemaBidragUrl}
            onClick={() => logAmplitudeEvent(listOfComponentNames.disclaimerLenke.tilBidrag, listOfActions.trykkPaaLenke)}
          >
            {translate.formatMessage({
              id: lenketekstBidrag,
              defaultMessage: "denne innsynstjenesten for bidrag.",
            })}
          </Lenke>
        </Normaltekst>
      </AlertStripe>
    </div>
  );
};

export default Disclaimer;

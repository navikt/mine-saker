import React from 'react';
import Lenke from "nav-frontend-lenker";
import { Undertittel, Normaltekst } from "nav-frontend-typografi";
import { kontaktOssUrl, gamleSaksoversiktTemaBidragUrl } from "../../urls";
import { useIntl } from "react-intl";
import { logAmplitudeEvent, listOfComponentNames, listOfActions } from '../../utils/amplitude';
import "./InlineListeDisclaimer.less";


const InlineListeDisclaimer = ({ parentComponent }) => {

  const translate = useIntl();
  const tekstBidrag = "disclaimer.tekst-bidrag";
  const lenketekstBidrag = "disclaimer.lenketekst-bidrag";

  
  if(parentComponent === "sakstemaliste") {
    return (
      <div className="dokumentvisning-info">
        <Undertittel className="dokumentvisning-info-tittel">
          Finner du ikke det du leter etter?
        </Undertittel>
        <Normaltekst>
          <ul className="tekst-sakstemaliste">
            <li>
              <div className="bidragslosning">
                {translate.formatMessage({
                  id: tekstBidrag,
                  defaultMessage:
                    "For bidragssaker se ",
                })}
                <Lenke
                  href={gamleSaksoversiktTemaBidragUrl}
                  onClick={() => logAmplitudeEvent(listOfComponentNames.disclaimerLenke.tilGamleSaksoversiktTemaBidrag, listOfActions.trykkPaaLenke)}
                >
                  {translate.formatMessage({
                    id: lenketekstBidrag,
                    defaultMessage: "innsynstjenesten for bidrag.",
                  })}
                </Lenke>
              </div>
            </li>
            <li>Har du sendt inn en søknad per post tar det litt tid før saken vises her.</li>
            <li>Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager ulempene dette medfører.</li>
          </ul>
          
          Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er noe du lurer på. 
        </Normaltekst>
      </div>
    )
  } else {
    return (
      <div className="dokumentvisning-info">
        <Undertittel className="dokumentvisning-info-tittel">
          Derfor kan du ikke se alle dokumentene
        </Undertittel>
        <Normaltekst>
          Det er to typer dokumenter vi foreløpig ikke kan vise deg:

          <ul className="tekst-dokumentliste">
            <li>Papirer du har sendt til NAV i posten</li>
            <li>Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.</li>
          </ul>

          Vi beklager ulempene dette medfører.
        </Normaltekst>
      </div>
    )
  }
}

export default InlineListeDisclaimer;
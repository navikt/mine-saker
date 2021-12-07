import React from 'react';
import Lenke from "nav-frontend-lenker";
import { Undertittel, Normaltekst } from "nav-frontend-typografi";
import { kontaktOssUrl, gamleSaksoversiktTemaBidragUrl } from "../../urls";
import { useIntl } from "react-intl";
import { logAmplitudeEvent, listOfComponentNames, listOfActions } from '../../utils/amplitude';
import "./InlineListeDisclaimer.less";


const InlineListeDisclaimer = () => {

  const translate = useIntl();
  const tekstBidrag = "disclaimer.tekst-bidrag";
  const lenketekstBidrag = "disclaimer.lenketekst-bidrag";

  return (
    <div className="dokumentvisning-info">
      <Undertittel className="dokumentvisning-info-tittel">
        Finner du ikke det du leter etter?
      </Undertittel>
      <Normaltekst>
        Når du logger inn på nav.no, viser vi deg søknader du har sendt, svar fra NAV og andre viktige dokumenter i saken din.
        Det er to typer saker og dokumenter som vi foreløpig ikke kan vise :
        <ul>
          <li>Papirer du har sendt til NAV i posten</li>
          <li>Dokumenter som noen andre har sendt, og som gjelder saken din. Det kan for eksempel være en lege, advokat, verge eller fullmektig. Vi beklager ulempene dette kan medføre.</li>
        </ul>
        
        <Normaltekst className="bidragslosning">
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
      </Normaltekst>
        Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er noe du lurer på. 
      </Normaltekst>
    </div>
  )
}

export default InlineListeDisclaimer;
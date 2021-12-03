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

    return(
        <div className="dokumentvisning-info">
            <Undertittel className="dokumentvisning-info-tittel">
              Enkelte dokumenter vises ikke her
            </Undertittel>
            <Normaltekst className="bidragslosning">
              {translate.formatMessage({
                  id: tekstBidrag,
                  defaultMessage:
                    "Leter du etter bidragsaker, da kan du forsøke ",
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
            <Normaltekst>
              Dokumenter som du har sendt inn via vanlig post til NAV og dokumenter sendt inn via tredjepart (leger/andre
              behandlere, advokater, verger, fullmektiger og lignende), vises dessverre ikke her. Vi jobber for å finne en
              løsning, og beklager ulempene dette måtte medføre. Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er
              noe du lurer på.
            </Normaltekst>
          </div>
    )
}

export default InlineListeDisclaimer;
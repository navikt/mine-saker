import React, { useState } from "react";
import { Link } from "react-router-dom";
import "nav-frontend-knapper-style";
import Dinosaur from "../../assets/Dinosaur";
import { dittNavUrl, soknadOgSkjemaUrl } from "../../urls";
import { Undertittel, Normaltekst } from "nav-frontend-typografi";
import { useIntl } from "react-intl";
import { listOfActions, listOfComponentNames, logAmplitudeEvent } from "../../utils/amplitude";
import { kontaktOssUrl, gamleSaksoversiktTemaBidragUrl } from "../../urls";
import Lenke from "nav-frontend-lenker";
import "./IngenSakerSide.less";

const IngenSakerSide = ({ ingress, useBothButtons }) => {
  const [showSecondButton] = useState(useBothButtons);

  const translate = useIntl();
  const saksoversiktKnappTekst = "ingen-saker.saksoversikt-knapp";
  const dittNavKnappTekst = "ingen-saker.ditt-nav-knapp";
  const tekstBidrag = "disclaimer.tekst-bidrag";
  const tekstSoknadOgSkjema = "disclaimer.tekst-soknad-og-skjema";
  const lenketekstSoknadOgSkjema = "disclaimer.lenketekst-soknad-og-skjema";

  return (
    <section className="ingen-saker-wrapper">
        
      <div className="tekstfelt">
       <h2 className="ingen-saker-ingress">{ingress}</h2>  
        <Undertittel className="tekstfelt-tittel">
          Finner du ikke det du leter etter?
        </Undertittel>
        <Normaltekst>
          <ul className="tekstfelt-tekst">
            <li>
              <div className="bidragslosning">
                {translate.formatMessage({
                  id: tekstBidrag,
                  defaultMessage:
                    "For bidragssaker er innsyn foreløpig ikke er tilgjengelig. Hvis du har søkt digitalt og fått kvittering, så har NAV fått søknaden.",
                })}
              </div>
            </li>
            <li>
              <div className="soknad-og-skjema">
                {translate.formatMessage({
                  id: tekstSoknadOgSkjema,
                  defaultMessage:
                    "Har du sendt inn en søknad per post tar det litt tid før saken vises her. Du kan likevel ",
                })}
                <Lenke
                  href={soknadOgSkjemaUrl}
                  onClick={() => logAmplitudeEvent(listOfComponentNames.disclaimerLenke.tilGamleSaksoversiktTemaBidrag, listOfActions.trykkPaaLenke)}
                >
                  {translate.formatMessage({
                    id: lenketekstSoknadOgSkjema,
                    defaultMessage: "ettersende dokumenter via søknad og skjema.",
                  })}
                </Lenke>
              </div>
            </li>
            <li>Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager ulempene dette medfører.</li>
          </ul>
          
          Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er noe du lurer på. 
        </Normaltekst>
      </div>
      <section className="button-section">
        {showSecondButton ? (
          <Link
            to="/mine-saker/"
            className="knapp knapp--hoved"
            onClick={() =>
              logAmplitudeEvent(
                listOfComponentNames.ingenSakerSide.tilMineSakerKnapp,
                listOfActions.trykkPaaLenkeKnapp
              )
            }
          >
            {translate.formatMessage({ id: saksoversiktKnappTekst, defaultMessage: "Gå til Mine saker" })}
          </Link>
        ) : null}
        <a
          href={dittNavUrl}
          className="knapp"
          onClick={() =>
            logAmplitudeEvent(
              listOfComponentNames.ingenSakerSide.tilForsidenDittnavKnapp,
              listOfActions.trykkPaaLenkeKnapp
            )
          }
        >
          {translate.formatMessage({ id: dittNavKnappTekst, defaultMessage: "Gå til forsiden av Ditt NAV" })}
        </a>
      </section>
      <section className="dinosaur-wrapper">
        <Dinosaur />
      </section>
    </section>
  );
};

export default IngenSakerSide;

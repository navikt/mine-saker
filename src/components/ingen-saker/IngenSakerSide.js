import React, { useState } from "react";
import { Link } from "react-router-dom";
import "nav-frontend-knapper-style";
import { minSideUrl, soknadOgSkjemaUrl } from "../../urls";
import { Normaltekst } from "nav-frontend-typografi";
import { useIntl } from "react-intl";
import { listOfActions, listOfComponentNames, logAmplitudeEvent } from "../../utils/amplitude";
import { kontaktOssUrl } from "../../urls";
import Lenke from "nav-frontend-lenker";
import "./IngenSakerSide.less";

const IngenSakerSide = ({ ingress, useBothButtons }) => {
  const [showSecondButton] = useState(useBothButtons);

  const translate = useIntl();
  const saksoversiktKnappTekst = "ingen-saker.saksoversikt-knapp";

  return (
    <section className="ingen-saker-wrapper">
      <div className="tekstfelt">
        <h2 className="ingen-saker-ingress">{ingress}</h2>
        <Normaltekst>
          <ul className="tekstfelt-tekst">
            <li>
              Har du sendt inn en søknad per post tar det litt tid før saken vises her. Du kan likevel{" "}
              {<Lenke href={soknadOgSkjemaUrl}> ettersende dokumenter</Lenke>}.
            </li>
            <li>
              Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager
              ulempene dette medfører.
            </li>
            <li>For bidragssaker kan du kun se dokumenter fra starten av 2022.</li>
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
              logAmplitudeEvent(listOfComponentNames.ingenSakerSide.tilMineSakerKnapp, listOfActions.trykkPaaLenkeKnapp)
            }
          >
            {translate.formatMessage({ id: saksoversiktKnappTekst, defaultMessage: "Gå til Mine saker" })}
          </Link>
        ) : null}
        <a
          href={minSideUrl}
          className="knapp"
          onClick={() =>
            logAmplitudeEvent(
              listOfComponentNames.ingenSakerSide.tilForsidenDittnavKnapp,
              listOfActions.trykkPaaLenkeKnapp
            )
          }
        >
          Gå til Min side
        </a>
      </section>
    </section>
  );
};

export default IngenSakerSide;

import React from "react";
import Lenke from "nav-frontend-lenker";
import { Undertittel, Normaltekst } from "nav-frontend-typografi";
import { kontaktOssUrl } from "../../urls";
import { useIntl } from "react-intl";
import "./InlineListeDisclaimer.less";

const InlineListeDisclaimer = () => {
  const translate = useIntl();
  const tekstBidrag = "disclaimer.tekst-bidrag";
  return (
    <div className="dokumentvisning-info">
      <Undertittel className="dokumentvisning-info-tittel">Finner du ikke det du leter etter?</Undertittel>
      <Normaltekst>
        <ul className="tekst-sakstemaliste">
          <li>
            Innhold som gjelder sykefravær er samlet under
            <Lenke href="https://www.nav.no/syk/sykefravaer">Ditt sykefravær</Lenke>. Det kan være noen dokumenter du
            ikke finner der. Hvis du ikke finner det du leter etter kan du se dokumenter for
            <Lenke href="https://person.nav.no/mine-saker/tema/SYK">sykepenger</Lenke> og
            <Lenke href="https://person.nav.no/mine-saker/tema/SYM">sykmelding</Lenke>.
          </li>
          <li className="bidragslosning">
            {translate.formatMessage({
              id: tekstBidrag,
              defaultMessage:
                "For bidragssaker er innsyn foreløpig ikke er tilgjengelig. Hvis du har søkt digitalt og fått kvittering, så har NAV fått søknaden.",
            })}
          </li>
          <li>Har du sendt inn en søknad per post tar det litt tid før saken vises her.</li>
          <li>
            Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager
            ulempene dette medfører.
          </li>
        </ul>
        Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er noe du lurer på.
      </Normaltekst>
    </div>
  );
};

export default InlineListeDisclaimer;

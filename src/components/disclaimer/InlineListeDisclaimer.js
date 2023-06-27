import React from "react";
import Lenke from "nav-frontend-lenker";
import { Undertittel, Normaltekst } from "nav-frontend-typografi";
import { kontaktOssUrl } from "../../urls";
import "./InlineListeDisclaimer.less";

const InlineListeDisclaimer = () => {
  return (
    <div className="dokumentvisning-info">
      <Undertittel className="dokumentvisning-info-tittel">Finner du ikke det du leter etter?</Undertittel>
      <Normaltekst>
        <ul className="tekst-sakstemaliste">
          <li>Har du sendt inn en søknad per post tar det litt tid før saken vises her.</li>
          <li>
            Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager
            ulempene dette medfører.
          </li>
          <li>For bidragssaker kan du kun se dokumenter fra starten av 2022.</li>
          <li>
            Finner du ikke dokumentet du leter etter under{" "}
            <Lenke href="https://person.nav.no/mine-saker/tema/SYK">sykepenger</Lenke> eller{" "}
            <Lenke href="https://person.nav.no/mine-saker/tema/SYM">sykmelding</Lenke> kan du sjekke{" "}
            <Lenke href="https://www.nav.no/syk/sykefravaer">sykefravær</Lenke>.
          </li>
        </ul>
        Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er noe du lurer på.
      </Normaltekst>
    </div>
  );
};

export default InlineListeDisclaimer;

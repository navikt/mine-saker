import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import "./BeklagerPanel.less";

const BeklagerPanel = () => {
  return (
    <AlertStripe type="info" className="beklager-panel">
      <Normaltekst className="blokk-s">
        <b>Vi beklager at du ikke får se eller åpnet alle dokumentene i saken din.</b>
      </Normaltekst>
      <Normaltekst>
        Mine saker er en innsynstjeneste som inneholder søknader, vedtaksbrev og andre viktige dokumenter i saken din.
        Det er imidlertid to typer dokumenter vi ennå ikke viser i Mine saker, og som er merket med «Adgang
        forbudt»-skilt når du logger inn på nav.no. Dette er:
        <ul className="beklager-panel__liste">
          <li>- Dokumenter som du har sendt via vanlig post til NAV.</li>
          <li>
            - Dokumenter som en tredjepart (leger/andre behandlere, advokater, verger, fullmektiger og lignende) har
            sendt inn, og som angår saken din.
          </li>
        </ul>
        Vi jobber for at dokumenter du sender inn via vanlig post om ikke alt for lenge skal bli synlige i Mine saker,
        uten at vi nøyaktig kan si når det vil skje. Når det gjelder innsyn i dokumenter sendt inn av en tredjepart må
        vi bruke mer tid på å finne en god løsning.
      </Normaltekst>
    </AlertStripe>
  );
};

export default BeklagerPanel;

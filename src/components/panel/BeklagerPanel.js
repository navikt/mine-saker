import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import { kontaktOssUrl } from "../../urls";
import "./BeklagerPanel.less";

const BeklagerPanel = () => {
  return (
    <AlertStripe type="info" className="beklager-panel">
      <Normaltekst>
        Dokumenter som du har sendt inn via vanlig post til NAV og dokumenter sendt inn via tredjepart (leger/andre
        behandlere, advokater, verger, fullmektiger og lignende), vises dessverre ikke her. Vi jobber for å finne en
        løsning, og beklager ulempene dette måtte medføre. Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er
        noe du lurer på noe.
      </Normaltekst>
    </AlertStripe>
  );
};

export default BeklagerPanel;

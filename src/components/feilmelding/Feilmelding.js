import React from "react";
import { AlertStripeFeil } from "nav-frontend-alertstriper";
import "./Feilmelding.less";

const FeilMelding = () => (
  <AlertStripeFeil className="panel-feil">
    Vi har for øyeblikket tekniske problemer. Dette kan føre til at du ikke får opp all informasjon om dine saker."
  </AlertStripeFeil>
);

export default FeilMelding;

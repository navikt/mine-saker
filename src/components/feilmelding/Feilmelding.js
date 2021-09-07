import React from "react";
import AlertStripe from "nav-frontend-alertstriper";
import "./Feilmelding.less";

const FeilMelding = ({ status }) => {
  const typeMelding = status === 503 ? "feil" : "advarsel";

  const tekst = "Vi har for øyeblikket tekniske problemer. Dette kan føre til at du ikke får opp all informasjon om dine saker. Vennligst prøv igjen senere.";

  return (
    <AlertStripe className="panel-feil" type={typeMelding}>
      {tekst}
    </AlertStripe>
  );
};

export default FeilMelding;

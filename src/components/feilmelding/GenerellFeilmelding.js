import React from "react";
import AlertStripe from "nav-frontend-alertstriper";
import "./GenerellFeilmelding.less";

const GenerellFeilmelding = ({ status }) => {
  const typeMelding = status === 503 ? "feil" : "advarsel";

  const tekst = {
    feil: "Vi fikk dessverre ikke tak i alle dine dokumenter. Ta kontakt hvis du har noen spørsmål.",
    advarsel:
      "Vi har for øyeblikket tekniske problemer. Vennligst prøv igjen senere eller ta kontakt med oss hvis du har noen spørsmål.",
  };

  return (
    <AlertStripe className="panel-feil" type={typeMelding}>
      {tekst[typeMelding]}
    </AlertStripe>
  );
};

export default GenerellFeilmelding;

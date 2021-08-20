import React from "react";
import { AlertStripeFeil, AlertStripeAdvarsel } from "nav-frontend-alertstriper";
import "./GenerellFeilmelding.less";

const GenerellFeilmelding = ({status}) => {
  const advarselMelding = (
    <AlertStripeAdvarsel className="panel-feil">
      Vi fikk dessverre ikke tak i alle dine dokumenter. Ta kontakt hvis du har noen spørsmål.
    </AlertStripeAdvarsel>
  );

  const feilMelding = (
    <AlertStripeFeil className="panel-feil">
      Vi har for øyeblikket tekniske problemer. Vennligst prøv igjen senere eller ta kontakt med oss hvis du har noen
      spørsmål.
    </AlertStripeFeil>
  );
  return <>{(status === 206) ? advarselMelding : feilMelding}</>;
};

export default GenerellFeilmelding;

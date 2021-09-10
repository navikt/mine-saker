import React from "react";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import MaskertIkon from "../../../assets/MaskertIkon";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { formatToReadableDate, setLocaleDate } from "../../../utils/date";
import "./Dokumentelement.less";
import JournalpostType from "../../../types/JournalpostType";
import DokumentType from "../../../types/DokumentType";

const Dokumentelement = ({ journalpost, dokument }) => {
  if (dokument.brukerHarTilgang === false) {
    setLocaleDate();

    return (
      <div className="maskertelement">
        <div className="maskert-header">
          <MaskertIkon />
          <Ingress className="maskert-header__tekst">{dokument.tittel}</Ingress>
        </div>
        <div className="maskert-etiketter">
          <Undertekst className="maskert-etiketter__dato">
            {`Sist endret ${formatToReadableDate(journalpost.sisteEndret)}`}
          </Undertekst>
          <EtikettAdvarsel className="maskert-etiketter__advarsel" mini>
            Dokumentet kan ikke vises
          </EtikettAdvarsel>
        </div>
      </div>
    );
  }

  return (
    <ChevronlenkeBase dato={journalpost.sisteEndret}>
      <Dokumentlenke
        journalpostId={journalpost.journalpostId}
        tekst={dokument.tittel}
        dokumentId={dokument.dokumentInfoId}
      />
    </ChevronlenkeBase>
  );
};

Dokumentelement.propTypes = {
  journalpost: JournalpostType,
  dokument: DokumentType,
};

export default Dokumentelement;

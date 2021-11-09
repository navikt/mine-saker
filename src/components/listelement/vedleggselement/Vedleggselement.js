import React from "react";
import MaskertIkon from "../../../assets/MaskertIkon";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { formatToReadableDate, setLocaleDate } from "../../../utils/date";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import Vedleggsliste from "../../liste/vedleggsliste/Vedleggsliste";
import "./Vedleggselement.less";
import JournalpostType from "../../../types/JournalpostType";

const Vedleggselement = ({ journalpost }) => {
  const byHoveddokument = (dokument) => dokument.dokumenttype === "HOVED";
  const hovedDokument = journalpost.dokumenter.find(byHoveddokument);

  if (hovedDokument.brukerHarTilgang === true) {
    return (
      <React.Fragment>
        <ChevronlenkeBase dato={journalpost.sisteEndret} hideBorder>
          <Dokumentlenke
            journalpostId={journalpost.journalpostId}
            tekst={journalpost.tittel}
            dokumentId={hovedDokument.dokumentInfoId}
          />
        </ChevronlenkeBase>
        <div className="vedleggselement">
          <Vedleggsliste journalpost={journalpost} />
        </div>
      </React.Fragment>
    );
  } 
  else 
  {
    setLocaleDate();
    
    return (
      <div className="maskertelement">
        <div className="maskert-header">
          <MaskertIkon />
          <Ingress className="maskert-header__tekst">{hovedDokument.tittel}</Ingress>
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
    )
  }
};

Vedleggselement.propTypes = {
  journalpost: JournalpostType,
};

export default Vedleggselement;

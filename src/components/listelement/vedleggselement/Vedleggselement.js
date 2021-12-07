import React from "react";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { formatToReadableDate, setLocaleDate } from "../../../utils/date";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import Vedleggsliste from "../../liste/vedleggsliste/Vedleggsliste";
import "./Vedleggselement.less";
import JournalpostType from "../../../types/JournalpostType";

const Vedleggselement = ({ journalpost }) => {
  const byHoveddokument = (dokument) => dokument.dokumenttype === "HOVED";
  const hovedDokument = journalpost.dokumenter.find(byHoveddokument);

  if (hovedDokument.brukerHarTilgang === true) {
    setLocaleDate();

    return (
      <React.Fragment>
        <div className={"vedleggslenke-base"}>
          <Ingress>
            <Dokumentlenke
              journalpostId={journalpost.journalpostId}
              tekst={journalpost.tittel}
              dokumentId={hovedDokument.dokumentInfoId}
            />
          </Ingress>
          <Undertekst className="vedleggslenke-base__tekst">{`Sist endret ${formatToReadableDate(journalpost.sisteEndret)}`}</Undertekst>
        </div>
          <div className="vedleggselement">
          <Vedleggsliste journalpost={journalpost} />
        </div>
      </React.Fragment>
    );
  } else {
    setLocaleDate();

    return (
      <div className="maskertelement">
        <div className="maskert-header">
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
        <div className="vedleggselement-uten-tilgang">
            <Vedleggsliste journalpost={journalpost} />
        </div>
      </div>
    );
  }
};

Vedleggselement.propTypes = {
  journalpost: JournalpostType,
};

export default Vedleggselement;

import React from "react";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import { Ingress, Undertekst } from "nav-frontend-typografi";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { formatToReadableDate, setLocaleDate } from "../../../utils/date";
import "./Dokumentelement.less";
import JournalpostType from "../../../types/JournalpostType";
import DokumentType from "../../../types/DokumentType";

const Dokumentelement = ({ journalpost, dokument }) => {
  setLocaleDate();
  if (dokument.brukerHarTilgang === true) {
    return (
      <div className={"dokumentlenke-base dokumentlenke-base__border"}>
      <Ingress>
        <Dokumentlenke
          journalpostId={journalpost.journalpostId}
          tekst={dokument.tittel}
          dokumentId={dokument.dokumentInfoId}
        />
      </Ingress>
      <Undertekst className="dokumentlenke-base__tekst">{`Sist endret ${formatToReadableDate(journalpost.sisteEndret)}`}</Undertekst>
    </div>
    );
  } else {
    return (
      <div className="maskertelement">
        <div className="maskert-header">
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
};

Dokumentelement.propTypes = {
  journalpost: JournalpostType,
  dokument: DokumentType,
};

export default Dokumentelement;

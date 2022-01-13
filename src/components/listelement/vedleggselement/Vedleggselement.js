import React from "react";
import { setLocaleDate } from "../../../utils/date";
import Vedleggsliste from "../../liste/vedleggsliste/Vedleggsliste";
import Hoveddokument from "./Hoveddokument";
import "./Vedleggselement.less";
import JournalpostType from "../../../types/JournalpostType";
import { dokumentUrl } from "../../../urls";

import Panel from 'nav-frontend-paneler';

const Vedleggselement = ({ journalpost }) => {
  const byHoveddokument = (dokument) => dokument.dokumenttype === "HOVED";
  const hovedDokument = journalpost.dokumenter.find(byHoveddokument);
  setLocaleDate();

  return(    
    <Panel className="vedleggpanel" id={journalpost.journalpostId} name={journalpost.journalpostId}>
      <Hoveddokument 
      brukerHarTilgang={hovedDokument.brukerHarTilgang}
      tittel={hovedDokument.tittel} 
      sisteEndret={journalpost.sisteEndret}
      url={`${dokumentUrl}/${journalpost.journalpostId}/${hovedDokument.dokumentInfoId}`}/>

      <div className="vedleggselement">
        <Vedleggsliste journalpost={journalpost} />
      </div>
  </Panel>
  )
};

Vedleggselement.propTypes = {
  journalpost: JournalpostType,
};

export default Vedleggselement;

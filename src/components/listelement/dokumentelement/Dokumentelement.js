import React from "react";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { Undertekst, Ingress } from "nav-frontend-typografi";
import Panel from 'nav-frontend-paneler';
import  { LenkepanelBase } from "nav-frontend-lenkepanel";

import { formatToReadableDate } from "../../../utils/date";
import { dokumentUrl } from "../../../urls";
import { useIntl } from "react-intl";


import "./Dokumentelement.less";
import DokumentIkon from "../../../assets/DokumentIkon"
import MaskertIkon from "../../../assets/MaskertIkon"

import JournalpostType from "../../../types/JournalpostType";
import DokumentType from "../../../types/DokumentType";

const DokumentInnholdMedTilgang = ({journalpost, dokument}) => {
  const url = `${dokumentUrl}/${journalpost.journalpostId}/${dokument.dokumentInfoId}`;
  const translate = useIntl();

  return (
    <LenkepanelBase
      href={url}
      alt=""
      id={journalpost.journalpostId}
      className="dokumentpanel__med__link dokumentpanel"
    >
      <div className="dokumentpanel__innhold" >
      <div className="dokumentpanel__ikon" >
        <DokumentIkon/>
      </div>
      <div>
        <Undertekst>
        {translate.formatMessage({id:"dokument-sist-endret" })+ " " + formatToReadableDate(journalpost.sisteEndret)}
        </Undertekst>
        <Ingress>{`${dokument.tittel} (PDF)`}</Ingress>
      </div>
      </div>
  </LenkepanelBase>
  );
};

const DokumentInnholdUtenTilgang = ({journalpost, dokument}) => {
  const translate = useIntl();

  return (
    <Panel
    id={journalpost.journalpostId}
    className="dokumentpanel dokumentpanel__uten_link">
      <div className="dokumentpanel__innhold" >
      <div className="dokumentpanel__ikon" >
        <MaskertIkon/>
      </div>
        <div>
          <Undertekst>
            {translate.formatMessage({id:"dokument-sist-endret" }) + " " + formatToReadableDate(journalpost.sisteEndret)}
          </Undertekst>
          <Ingress>{`${dokument.tittel}`}</Ingress>
          <EtikettAdvarsel className="dokumentpanel__advarsel" mini>
            Dokumentet kan ikke vises
        </EtikettAdvarsel>
        </div>
      </div>
  </Panel>
  );
};


const Dokumentelement = ({ journalpost, dokument }) => {
  return (dokument.brukerHarTilgang ? 
  <DokumentInnholdMedTilgang journalpost={journalpost} dokument={dokument} /> : 
  <DokumentInnholdUtenTilgang journalpost={journalpost} dokument={dokument} />)
};

Dokumentelement.propTypes = {
  journalpost: JournalpostType,
  dokument: DokumentType,
};

export default Dokumentelement;

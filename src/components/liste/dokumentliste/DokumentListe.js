import React from "react";
import {  useIntl } from "react-intl";
import { Normaltekst } from "nav-frontend-typografi";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import DokumentIkon from "../../../assets/DokumentIkon";
import InformasjoIkon from "../../../assets/InformasjonIkon";
import BeklagerPanel from "../../panel/BeklagerPanel";
import Lenkeliste from "../lenkeliste/Lenkeliste";
import { useQuery } from "react-query";
import { fetchResponse } from "../../../api";
import "./Dokumentliste.less";

const toListElements = (journalpost) => {
  if (journalpost.harVedlegg) {
    return <ListeElement type="vedlegg" key={journalpost.journalpostId} journalpost={journalpost} />;
  } else {
    return journalpost.dokumenter.map((dokument) => (
      <ListeElement type="dokument" key={journalpost.journalpostId} journalpost={journalpost} dokument={dokument} />
    ));
  }
};

const DokumentListe = ({ sakstemaKey, temakode }) => {
  const { data, isLoading } = useQuery(sakstemaKey, fetchResponse);
  const journalposter = Array.isArray(data?.data) ? data?.data[0].journalposter : [];

  const translate = useIntl();
  //const basePath = "dokumentliste." + temakode + ".";
  const lenkepanelTittel = "default.om-saken-panel-tittel";
  const lenkepanelIngress = "default.ingress";
  const listeTittel = "default.dokumentliste-tittel";

  return (
    <React.Fragment>
      <section>
        <Liste tittel={translate.formatMessage({id: lenkepanelTittel, defaultMessage: "Om saken"})} ikon={<InformasjoIkon />}>
          <Normaltekst className="om-saken-ingress blokk-xs">
            {translate.formatMessage({id: lenkepanelIngress, defaultMessage: lenkepanelIngress})}
          </Normaltekst>
          <Lenkeliste data={data?.data} />
        </Liste>
      </section>
      <section id="dokumentliste">
        <Liste tittel={translate.formatMessage({id: listeTittel, defaultMessage: "Dokumentliste"})} ikon={<DokumentIkon />} isLoading={isLoading}>
          {journalposter.map(toListElements)}
        </Liste>
      </section>
      <section>
        <BeklagerPanel />
      </section>
    </React.Fragment>
  );
};

export default DokumentListe;

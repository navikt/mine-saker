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
import fetchData from "../../../api";
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
  const { data, isLoading } = useQuery(sakstemaKey, fetchData);
  const journalposter = Array.isArray(data) ? data[0].journalposter : [];

  const translate = useIntl();
  const basePath = "dokumentliste." + temakode + ".";
  const lenkepanelTittel = basePath + "lenkepanel-tittel";
  const lenkepanelIngress = basePath + "lenkepanel-ingress";
  const listeTittel = basePath + "liste-tittel";

  return (
    <React.Fragment>
      <section>
        <Liste tittel={translate.formatMessage({id: lenkepanelTittel})} ikon={<InformasjoIkon />}>
          <Normaltekst className="om-saken-ingress blokk-xs">
            {translate.formatMessage({id: lenkepanelIngress})}
          </Normaltekst>
          <Lenkeliste data={data} />
        </Liste>
      </section>
      <section id="dokumentliste">
        <Liste tittel={translate.formatMessage({id: listeTittel})} ikon={<DokumentIkon />} isLoading={isLoading}>
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

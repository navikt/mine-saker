import React from "react";
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

const DokumentListe = ({ sakstemaKey }) => {
  const { data, isLoading } = useQuery(sakstemaKey, fetchData);
  const journalposter = Array.isArray(data) ? data[0].journalposter : [];

  return (
    <React.Fragment>
      <section>
        <Liste tittel="Om saken" ikon={<InformasjoIkon />}>
          <Normaltekst className="om-saken-ingress blokk-xs">
            Her finner du informasjon om saken din. Du har mulighet til å melde fra om endringer eller ettersende
            informasjon som har betydning når NAV skal behandle saken.
          </Normaltekst>
          <Lenkeliste />
        </Liste>
      </section>
      <section id="dokumentliste">
        <Liste tittel="Dokumentliste" ikon={<DokumentIkon />} isLoading={isLoading}>
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

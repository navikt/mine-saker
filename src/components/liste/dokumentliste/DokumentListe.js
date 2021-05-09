import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import DokumentIkon from "../../../assets/DokumentIkon";
import InformasjoIkon from "../../../assets/InformasjonIkon";
import AlertStripe from "nav-frontend-alertstriper";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import "./Dokumentliste.less";

const DokumentListe = ({ journalposter }) => {
  return (
    <React.Fragment>
      <Liste tittel="Om saken" classname="panel" ikon={<InformasjoIkon />}>
        <Normaltekst className="om-saken-ingress">
          Her finner du informasjon om saken din. Du har mulighet til å melde fra om endringer eller ettersende
          informasjon som har betydning når NAV skal behandle saken.
        </Normaltekst>
      </Liste>
      <Liste tittel="Dokumentliste" classname="panel" ikon={<DokumentIkon />}>
        {journalposter.map((journalpost) =>
          journalpost.arkiverteDokumenter.map((arkivertTema) => {
            return (
              <ListeElement
                type="dokument"
                key={journalpost.journalpostId}
                dato={journalpost.sisteEndret}
                tekst={arkivertTema.tittel}
                journalpostId={journalpost.journalpostId}
                dokumentId={arkivertTema.dokumentInfoId}
              />
            );
          })
        )}
        <AlertStripe type="info">
          <Normaltekst>Vi beklager at du ikke kan se alle dokumentene dine i saken din.</Normaltekst>
        </AlertStripe>
      </Liste>
    </React.Fragment>
  );
};

export default DokumentListe;

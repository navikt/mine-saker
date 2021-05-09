import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import DokumentIkon from "../../../assets/DokumentIkon";
import InformasjoIkon from "../../../assets/InformasjonIkon";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import AlertStripe from "nav-frontend-alertstriper";
import Dokumentlenke from "../../chevronlenke/dokumentlenke/Dokumentlenke";
import "./Dokumentliste.less";
import Liste from "../Liste";

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
              <ChevronlenkeBase key={journalpost.journalpostId} dato={journalpost.sisteEndret}>
                <Dokumentlenke
                  tekst={arkivertTema.tittel}
                  journalpostId={journalpost.journalpostId}
                  dokumentId={arkivertTema.dokumentInfoId}
                />
              </ChevronlenkeBase>
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

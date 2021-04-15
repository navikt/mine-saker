import React from "react";
import { Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import "./Dokumentliste.less";
import DokumentIkon from "../../assets/DokumentIkon";

const DokumentListe = ({ journalposter }) => {
  return (
    <Veilederpanel type="plakat" kompakt svg={<DokumentIkon />}>
      <div className="dokumentliste-tittel">
        <Systemtittel>Dokumentliste</Systemtittel>
      </div>
      <div className="dokumentliste-tittel">
        {journalposter.map((journalpost) => {
          return <div key={journalpost.journalpostId}>{journalpost.tittel}</div>;
        })}
      </div>
    </Veilederpanel>
  );
};

export default DokumentListe;

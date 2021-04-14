import React from "react";
import { useQueries, useQuery } from "react-query";
import { Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import { fetchBySakstemaKode } from "../../api";
import "./Dokumentliste.less";
import DokumentIkon from "../../assets/DokumentIkon";

const DokumentListe = ({ sakstemaer, temakode }) => {
  useQueries(
    sakstemaer.map((sakstema) => {
      return {
        queryKey: ["sakstemakode", sakstema.kode],
        queryFn: () => fetchBySakstemaKode(sakstema.kode),
      };
    })
  );

  const { data: result, isSuccess } = useQuery(["sakstemakode", temakode]);

  if (!isSuccess) {
    return null;
  }

  return (
    <Veilederpanel type="plakat" kompakt svg={<DokumentIkon />}>
      <div className="dokumentliste-tittel">
        <Systemtittel>Dokumentliste</Systemtittel>
      </div>
      <div className="dokumentliste-tittel">
        {result[0].journalposter.map((journalpost) => {
          return <div key={journalpost.journalpostId}>{journalpost.tittel}</div>;
        })}
      </div>
    </Veilederpanel>
  );
};

export default DokumentListe;

import React from "react";
import { useQueries } from "react-query";
import { Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import { fetchBySakstemaKode } from "../../api";
import "./Dokumentliste.less";
import DokumentIkon from "../../assets/DokumentIkon";

const DokumentListe = ({ sakstemaer }) => {
  const queries = useQueries(
    sakstemaer.map((sakstema) => {
      return {
        queryKey: ["sakstemakode", sakstema.kode],
        queryFn: () => fetchBySakstemaKode(sakstema.kode),
      };
    })
  );

  console.log(queries);

  return (
    <Veilederpanel type="plakat" kompakt svg={<DokumentIkon />}>
      <div className="dokumentliste-tittel">
        <Systemtittel>Dokumentliste</Systemtittel>
      </div>
    </Veilederpanel>
  );
};

export default DokumentListe;

import React from "react";
import { useQueries } from "react-query";
import { Systemtittel } from "nav-frontend-typografi";
import SaksIkon from "../../assets/SaksIkon";
import Veilederpanel from "nav-frontend-veilederpanel";
import { fetchBySakstemaKode } from "../../api";
import "./Dokumentliste.less";

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
    <Veilederpanel type="plakat" kompakt svg={<SaksIkon />}>
      <div className="dokumentliste-tittel">
        <Systemtittel>Dokumentliste</Systemtittel>
      </div>
    </Veilederpanel>
  );
};

export default DokumentListe;

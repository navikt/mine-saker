import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import DokumentListe from "../../components/dokumentliste/DokumentListe";
import { useQueries, useQuery } from "react-query";
import { fetchBySakstemaKode } from "../../api";

const Sakstemabase = ({ sakstemaer, kode }) => {
  useQueries(
    sakstemaer.map((sakstema) => {
      return {
        queryKey: ["sakstemakode", sakstema.kode],
        queryFn: () => fetchBySakstemaKode(sakstema.kode),
      };
    })
  );

  const { data: result, isSuccess } = useQuery(["sakstemakode", kode]);

  if (!isSuccess) {
    return null;
  }

  return (
    <div className="sakstema">
      <Sidetittel className="sakstema__tittel">{result[0].navn}</Sidetittel>
    </div>
  );
};

export default Sakstemabase;

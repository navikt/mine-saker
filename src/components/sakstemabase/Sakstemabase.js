import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import DokumentListe from "../../components/dokumentliste/DokumentListe";
import { useQueries, useQuery } from "react-query";
import { fetchBySakstemaKode } from "../../api";
import "./Sakstemabase.less";

const Sakstemabase = ({ sakstemaer, temakode }) => {
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
    <div className="sakstema">
      <div className="sakstemabase-tittel">
        <Sidetittel>{result[0].navn}</Sidetittel>
      </div>
      <DokumentListe journalposter={result[0].journalposter} />
    </div>
  );
};

export default Sakstemabase;

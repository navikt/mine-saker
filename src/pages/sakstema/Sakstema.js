import React from "react";
import { useQueries, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Sidetittel } from "nav-frontend-typografi";
import { sakstemaerUrl } from "../../urls";
import fetchData, { fetchBySakstemaKode } from "../../api";
import DokumentListe from "../../components/dokumentliste/DokumentListe";
import "./Sakstema.less";

const Sakstema = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData, { onSuccess: (data) => {} });
  const { temakode } = useParams();

  if (!sakstemaer) {
    return null;
  }

  return (
    <div className="sakstema">
      <Sidetittel className="sakstema__tittel">{temakode}</Sidetittel>
      <DokumentListe sakstemaer={sakstemaer} temakode={temakode} />
    </div>
  );
};

export default Sakstema;

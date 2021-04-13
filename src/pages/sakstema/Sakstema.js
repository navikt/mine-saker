import React from "react";
import { useQuery } from "react-query";
import { Sidetittel } from "nav-frontend-typografi";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import DokumentListe from "../../components/dokumentliste/DokumentListe";
import "./Sakstema.less";

const Sakstema = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData);

  if (!sakstemaer) {
    return null;
  }

  return (
    <div className="sakstema">
      <Sidetittel className="sakstema__tittel">Sakstema</Sidetittel>
      <DokumentListe sakstemaer={sakstemaer} />
    </div>
  );
};

export default Sakstema;

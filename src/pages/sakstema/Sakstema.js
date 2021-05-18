import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterUrl } from "../../urls";
import fetchData from "../../api";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import PageBase from "../../components/pagebase/PageBase";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();
  const { data, isLoading, isError } = useQuery(`${journalposterUrl}?sakstemakode=${temakode}`, fetchData);

  if (isLoading) {
    return null;
  }

  return (
    <PageBase tittel={data[0].navn} isLoading={isLoading} isError={isError}>
      <DokumentListe journalposter={data[0].journalposter} />
    </PageBase>
  );
};

export default Sakstema;

import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import PageBase from "../pagebase/PageBase";
import { createCrumb } from "../../hooks/breadcrumbs";
import { fetchBySakstemaKode } from "../../api";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();
  const { data, isLoading, isError } = useQuery(["sakstemakode", temakode], () => fetchBySakstemaKode(temakode));

  const tittel = Array.isArray(data) ? data[0].navn : "";
  const crumb = createCrumb(`/person/mine-saker/${temakode}`, tittel || "...");

  const journalposter = Array.isArray(data) ? data[0].journalposter : [];

  return (
    <PageBase tittel={tittel} breadcrumb={crumb} isError={isError}>
      <DokumentListe journalposter={journalposter} isLoading={isLoading} />
    </PageBase>
  );
};

export default Sakstema;

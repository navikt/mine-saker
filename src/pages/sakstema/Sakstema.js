import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterUrl } from "../../urls";
import fetchData from "../../api";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import PageBase from "../pagebase/PageBase";
import { createCrumb } from "../../hooks/breadcrumbs";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();

  const queryKey = `${journalposterUrl}?sakstemakode=${temakode}`;
  const { data, isLoading, isError } = useQuery(queryKey, fetchData);

  const tittel = Array.isArray(data) ? data[0].navn : "";
  const crumb = createCrumb(`/person/mine-saker/${temakode}`, tittel);

  return (
    <PageBase tittel={tittel} breadcrumb={crumb} isLoading={isLoading} isError={isError}>
      <DokumentListe queryKey={queryKey} />
    </PageBase>
  );
};

export default Sakstema;

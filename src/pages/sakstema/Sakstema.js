import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterUrl } from "../../urls";
import fetchData from "../../api";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import PageBase from "../pagebase/PageBase";
import Spinner from "../../components/spinner/Spinner";
import { createCrumb } from "../../hooks/breadcrumbs";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();
  const { data, isLoading, isError } = useQuery(`${journalposterUrl}?sakstemakode=${temakode}`, fetchData);

  if (isLoading) {
    return <Spinner message="Laster inn siden..." />;
  }

  const tittel = Array.isArray(data) ? data[0].navn : "";
  const journalposter = Array.isArray(data) ? data[0].journalposter : [];
  const crumb = createCrumb(`/person/mine-saker/${temakode}`, tittel);

  return (
    <PageBase tittel={tittel} breadcrumb={crumb} isLoading={isLoading} isError={isError}>
      <DokumentListe journalposter={journalposter} />
    </PageBase>
  );
};

export default Sakstema;

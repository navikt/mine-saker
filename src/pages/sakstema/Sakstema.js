import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterUrl, mineSakerUrl } from "../../urls";
import fetchData from "../../api";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import PageBase from "../pagebase/PageBase";
import { createCrumb } from "../../hooks/breadcrumbs";
import { redirectToIdPorten } from "../../utils/redirect";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();
  const sakstemaKey = `${journalposterUrl}?sakstemakode=${temakode}`;

  const { data, isLoading, isError } = useQuery(sakstemaKey, fetchData, {
    onError: (error) => {
      if (error.response.status === 401) {
        redirectToIdPorten(`${mineSakerUrl}/tema/${temakode}`);
      }
    },
  });

  const tittel = Array.isArray(data) ? data[0].navn : "";
  const crumb = createCrumb(`/person/mine-saker/${temakode}`, tittel || "...");

  return (
    <PageBase tittel={tittel} breadcrumb={crumb} isLoading={isLoading} isError={isError}>
      <DokumentListe sakstemaKey={sakstemaKey} />
    </PageBase>
  );
};

export default Sakstema;

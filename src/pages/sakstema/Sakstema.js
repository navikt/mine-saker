import React from "react";
import { useIntl } from "react-intl";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterUrl, mineSakerUrl } from "../../urls";
import { fetchResponse } from "../../api";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import PageBase from "../pagebase/PageBase";
import { createCrumb } from "../../hooks/breadcrumbs";
import { redirectToIdPorten } from "../../utils/redirect";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();
  const sakstemaKey = `${journalposterUrl}?sakstemakode=${temakode}`;

  const { data, isLoading } = useQuery(sakstemaKey, fetchResponse, {
    onError: (error) => {
      if (error.response.status === 401) {
        redirectToIdPorten(`${mineSakerUrl}/tema/${temakode}`);
      } else {
        window.location.assign(`${mineSakerUrl}/`);
      }
    },
  });

  const tittel = Array.isArray(data?.data) ? data?.data[0].navn : "";
  const crumb = createCrumb(`/mine-saker/${temakode}`, tittel || "...");

  const translate = useIntl();
  const tittelPath = "sakstema." + temakode + ".tittel";

  return (
    <PageBase 
      tittel={translate.formatMessage({id: tittelPath, defaultMessage: tittel})}
      breadcrumb={crumb} 
      isLoading={isLoading} 
      statusCode={data?.statusCode}>
      <DokumentListe sakstemaKey={sakstemaKey} temakode={temakode}/>
    </PageBase>
  );
};

export default Sakstema;

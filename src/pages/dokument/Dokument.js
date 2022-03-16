import React from 'react'
import { useIntl } from "react-intl";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageBase from "../pagebase/PageBase";
import { createCrumb } from "../../hooks/breadcrumbs";
import { redirectToIdPorten } from "../../utils/redirect";
import { fetchResponse } from "../../api";
import { journalposterUrl, mineSakerUrl } from "../../urls";
import DokumentSideInnhold from '../../components/dokumentsideinnhold/DokumentSideInnhold';

const Dokument = () => {
  const { temakode, journalpostId } = useParams();
  const sakstemaKey = `${journalposterUrl}?sakstemakode=${temakode}`;
  const { data, isLoading } = useQuery(sakstemaKey, fetchResponse, {
    onError: (error) => {
      if (error.response.status === 401) {
        redirectToIdPorten(`${mineSakerUrl}/tema/${temakode}/${journalpostId}`);
      } else {
        window.location.assign(`${mineSakerUrl}/`);
      }
    },
  });

  const tittel = Array.isArray(data?.data) ? data?.data[0]?.navn : "";
  const crumbSaksTema = createCrumb(`/mine-saker/tema/${temakode}`, tittel || "...");
  const crumbDokument = createCrumb(`/mine-saker/tema/${temakode}/${journalpostId}`, "Dokument");
  const translate = useIntl();
  const tittelPath = "sakstema." + temakode + ".tittel";

  return (
    <PageBase
      tittel={translate.formatMessage({ id: tittelPath, defaultMessage: tittel })}
      breadcrumb={[crumbSaksTema, crumbDokument]}
      isLoading={isLoading}
      statusCode={data?.statusCode}
    >
      <DokumentSideInnhold
        sakstemaKey={sakstemaKey}
        temakode={temakode}
        gjelendeJournalpostId={journalpostId}
        tittel={translate.formatMessage({ id: tittelPath, defaultMessage: tittel })} />
    </PageBase>
  )
}

export default Dokument
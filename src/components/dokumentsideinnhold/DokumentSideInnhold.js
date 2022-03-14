import React from 'react'
import { useQuery } from 'react-query';
import { useIntl } from "react-intl";
import { string } from 'prop-types';
import { fetchResponse } from '../../api';
import { mineSakerUrl, kontaktOssUrl } from '../../urls';
import IngenSakerSide from '../ingenSaker/IngenSakerSide';
import ListeElement from '../listelement/ListeElement';
import ListeMedDokumenter from '../liste/ListeMedDokumenter';
import Lenke from "nav-frontend-lenker"
import { AlertStripeInfo } from "nav-frontend-alertstriper";
import "./DokumentSideInnhold.less";

const hentGjelendeDokument = (journalposter, gjelendeJournalpostId) => {
  if (!journalposter) {
    return;
  }
  const gjelendeJournalpost = journalposter.filter((journalpost) => journalpost.journalpostId === gjelendeJournalpostId)[0];
  if (!gjelendeJournalpost) {
    return;
  } else if (gjelendeJournalpost.harVedlegg) {
    return <ListeElement type="vedlegg" key={gjelendeJournalpost.journalpostId} journalpost={gjelendeJournalpost} />;
  } else {
    return gjelendeJournalpost.dokumenter.map(dokument =>
      <ListeElement type="dokument" key={gjelendeJournalpost.journalpostId} journalpost={gjelendeJournalpost} dokument={dokument} />
    )
  }
}


const DokumentSideInnhold = ({ sakstemaKey, tittel, temakode, gjelendeJournalpostId }) => {
  const { data, isLoading, isSuccess } = useQuery(sakstemaKey, fetchResponse);
  const visIngenSaker = data?.data?.length === 0 && isSuccess && data?.statusCode === 200;
  const translate = useIntl();
  const defaultListeTittel = "default.dokumentliste-tittel";
  const Dokument = hentGjelendeDokument(data?.data[0]?.journalposter, gjelendeJournalpostId)

  return (
    <>
      {visIngenSaker ? (
        <React.Fragment>
          <IngenSakerSide
            useBothButtons={true}
            ingress="Du har foreløpig ikke noen registrerte saker på dette temaet"
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <section id="dokumentliste">
            <ListeMedDokumenter
              tittel={translate.formatMessage({ id: defaultListeTittel, defaultMessage: "Dokumentliste" })}
              isLoading={isLoading}
            >
              {Dokument ? Dokument :
                <AlertStripeInfo >
                  Vi fant ikke noen dokumenter på dette id-nummeret. Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er noe         du trenger hjelp med.
                </AlertStripeInfo>
              }
              <Lenke className="se-alle-dokumenter" href={`${mineSakerUrl}/tema/${temakode}`}>
                Se alle dine dokumenter for tema {tittel}
              </Lenke>
            </ListeMedDokumenter>
          </section>
        </React.Fragment>
      )}
    </>
  )
}
DokumentSideInnhold.prototype = {
  sakstemaKey: string.isRequired,
}

export default DokumentSideInnhold
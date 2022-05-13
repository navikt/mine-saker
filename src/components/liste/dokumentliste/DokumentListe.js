import React from "react";
import { useIntl } from "react-intl";
import { string } from "prop-types";
import ListeMedDokumenter from "../ListeMedDokumenter";
import IngenSakerSide from "../../ingen-saker/IngenSakerSide";
import ListeElement from "../../listelement/ListeElement";
import { useQuery } from "react-query";
import { fetchResponse } from "../../../api";
import "./Dokumentliste.less";
import Disclaimerpanel from "../../disclaimer/disclaimerpanel/Disclaimerpanel";
import OmSaken from "../../om-saken/OmSaken";

const toListElements = (journalpost) => {
  if (journalpost.harVedlegg) {
    return <ListeElement type="vedlegg" key={journalpost.journalpostId} journalpost={journalpost} />;
  } else {
    return journalpost.dokumenter.map((dokument) => (
      <ListeElement type="dokument" key={journalpost.journalpostId} journalpost={journalpost} dokument={dokument} />
    ));
  }
};

const DokumentListe = ({ sakstemaKey, temakode }) => {
  const { data, isLoading, isSuccess } = useQuery(sakstemaKey, fetchResponse);
  const journalposter = Array.isArray(data?.data) ? data?.data[0]?.journalposter : [];
  const visIngenSaker = data?.data?.length === 0 && isSuccess && data?.statusCode === 200;
  const translate = useIntl();
  const defaultListeTittel = "default.dokumentliste-tittel";

  return (
    <>
      {visIngenSaker ? (
        <React.Fragment>
          <IngenSakerSide
            useBothButtons={true}
            ingress="Du har foreløpig ikke noen registrerte saker på dette temaet"
          ></IngenSakerSide>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <section>
            <OmSaken temakode={temakode} />
          </section>
          <section id="dokumentliste">
            <ListeMedDokumenter
              tittel={translate.formatMessage({ id: defaultListeTittel, defaultMessage: "Dokumentliste" })}
              isLoading={isLoading}
            >
              {journalposter?.map(toListElements)}
              <Disclaimerpanel />
            </ListeMedDokumenter>
          </section>
        </React.Fragment>
      )}
    </>
  );
};

DokumentListe.propTypes = {
  sakstemaKey: string.isRequired,
};

export default DokumentListe;

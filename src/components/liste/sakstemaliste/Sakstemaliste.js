import React from "react";
import { useIntl } from "react-intl";
import { useQuery } from "react-query";
import { fetchResponse } from "../../../api";
import { sakstemaerUrl } from "../../../urls";
import SaksIkon from "../../../assets/SaksIkon";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import IngenSakerSide from "../../ingenSaker/IngenSakerSide";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const { data: sakstemaer, isLoading, isSuccess } = useQuery(sakstemaerUrl, fetchResponse);
  const visIngenSaker = sakstemaer?.data.length === 0 && isSuccess && sakstemaer?.statusCode === 200;

  const translate = useIntl();

  const tittel = "sakstemaliste.tittel";

  return (
    <>
      {visIngenSaker ? (
        <IngenSakerSide 
          useBothButtons={false}
          ingress="Du har foreløpig ingen registrerte saker" />
      ) : (
        <Liste
          tittel={translate.formatMessage({ id: tittel, defaultMessage: "Saksoversikt" })}
          ikon={<SaksIkon />}
          isLoading={isLoading}
        >
          {sakstemaer?.data.map((sakstema) => (
            <ListeElement
              type="sakstema"
              key={sakstema.kode}
              dato={sakstema.sistEndret}
              tekst={sakstema.navn}
              kode={sakstema.kode}
              sakstemaUrl={sakstema.detaljvisningUrl}

            />
          ))}
        </Liste>
      )}
    </>
  );
};

export default Sakstemaliste;

import React from "react";
import { useIntl } from "react-intl";
import { useQuery } from "react-query";
import { fetchResponse } from "../../../api";
import { sakstemaerUrl } from "../../../urls";
import SaksIkon from "../../../assets/SaksIkon";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const {data:sakstemaer, isLoading } = useQuery(sakstemaerUrl, fetchResponse);

  const translate = useIntl();

  const tittel = "sakstemaliste.tittel"

  return (
    <Liste tittel={translate.formatMessage({id: tittel, defaultMessage: "Saksoversikt"})} ikon={<SaksIkon />} isLoading={isLoading}>
      {sakstemaer?.data.map((sakstema) => (
        <ListeElement
          type="sakstema"
          key={sakstema.kode}
          dato={sakstema.sistEndret}
          tekst={sakstema.navn}
          kode={sakstema.kode}
        />
      ))}
    </Liste>
  );
};

export default Sakstemaliste;

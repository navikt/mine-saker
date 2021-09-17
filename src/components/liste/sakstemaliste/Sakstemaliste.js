import React from "react";
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

  return (
    <>
      {visIngenSaker ? (
        <IngenSakerSide page="mine-saker" ingress="Du har foreløpig ingen registrerte saker"></IngenSakerSide>
      ) : (
        <Liste className="saksliste" tittel="Saksoversikt" ikon={<SaksIkon />} isLoading={isLoading}>
          {sakstemaer?.data?.map((sakstema) => (
            <ListeElement
              type="sakstema"
              key={sakstema.kode}
              dato={sakstema.sistEndret}
              tekst={sakstema.navn}
              kode={sakstema.kode}
            />
          ))}
        </Liste>
      )}
    </>
  );
};

export default Sakstemaliste;

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchResponse } from "../../../api";
import { sakstemaerUrl } from "../../../urls";
import SaksIkon from "../../../assets/SaksIkon";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import IngenSakerSide from "../../ingenSaker/IngenSakerSide";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const [toggleNoDocuments, setToggleNoDocuments] = useState(false);
  const {data:sakstemaer, isLoading, isSuccess } = useQuery(sakstemaerUrl, fetchResponse);


  useEffect(() => {
    if(sakstemaer?.data.length === 0 && isSuccess) {
      setToggleNoDocuments(true);
    }
  }, [sakstemaer, isSuccess]);

  return (
    <>
    { toggleNoDocuments ? 
      <IngenSakerSide page="mine-saker" ingress="Du har foreløpig ingen registrerte saker"></IngenSakerSide>

      :

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
    }
    </>
  );
};

export default Sakstemaliste;

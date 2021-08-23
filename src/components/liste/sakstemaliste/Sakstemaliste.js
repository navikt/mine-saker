import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Normaltekst } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import fetchData, {getData} from "../../../api";
import { sakstemaerUrl } from "../../../urls";
import SaksIkon from "../../../assets/SaksIkon";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import "./Sakstemaliste.less";

const Sakstemaliste = ( setStatus ) => {
  //const { data: sakstemaer, isLoading } = useQuery(sakstemaerUrl, fetchData);
  const [sakstemaer, setSakstemaer] = useState([]);

  console.log("#sakstemaliste------");
  useEffect(() => {
    console.log("sakstemaliste useeffect")
    const fetchSakstema = async () => {
    try {
      const { data: sakstemaerListe, status } = await getData(sakstemaerUrl);
      if(status === 200) {
        setSakstemaer(sakstemaerListe);
        setStatus(status);
      }
      else if (status === 206) {
        setSakstemaer(sakstemaerListe);
        setStatus(status);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
    fetchSakstema();
  }, [])

  return (
    <Liste tittel="Saksoversikt" ikon={<SaksIkon />} >
      {sakstemaer?.map((sakstema) => (
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

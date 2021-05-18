import React from "react";
import { useQuery } from "react-query";
import { Normaltekst } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";
import fetchData from "../../../api";
import { sakstemaerUrl } from "../../../urls";
import SaksIkon from "../../../assets/SaksIkon";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData);

  return (
    <Liste classname="saksoversikt" tittel="Saksoversikt" ikon={<SaksIkon />}>
      {sakstemaer?.map((sakstema) => (
        <ListeElement
          type="sakstema"
          key={sakstema.kode}
          dato={sakstema.sistEndret}
          tekst={sakstema.navn}
          kode={sakstema.kode}
        />
      ))}
      <AlertStripe type="advarsel" className="advarsel-box">
        <Normaltekst>
          Vi jobber for tiden med nye løsninger for innsyn i sak, og det er ikke sikkert alle sakene dine vises her
          akkurat nå. Vi beklager dette, ta kontakt dersom du lurer på noe.
        </Normaltekst>
      </AlertStripe>
    </Liste>
  );
};

export default Sakstemaliste;

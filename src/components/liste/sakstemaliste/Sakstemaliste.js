import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import SaksIkon from "../../../assets/SaksIkon";
import AlertStripe from "nav-frontend-alertstriper";
import ChevronlenkeBase from "../../chevronlenke/ChevronlenkeBase";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../../urls";
import fetchData from "../../../api";
import Sakstemalenke from "../../chevronlenke/sakstemalenke/Sakstemalenke";
import Liste from "../Liste";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData);

  return (
    <Liste classname="saksoversikt" tittel="Saksoversikt" ikon={<SaksIkon />}>
      {sakstemaer?.map((sakstema) => (
        <ChevronlenkeBase key={sakstema.kode} dato={sakstema.sistEndret}>
          <Sakstemalenke tekst={sakstema.navn} kode={sakstema.kode} />
        </ChevronlenkeBase>
      ))}
      <AlertStripe type="advarsel">
        <Normaltekst>
          Vi jobber for tiden med nye løsninger for innsyn i sak, og det er ikke sikkert alle sakene dine vies her
          akkurat nå. Vi beklager dette, ta kontakt dersom du lurer på noe.
        </Normaltekst>
      </AlertStripe>
    </Liste>
  );
};

export default Sakstemaliste;

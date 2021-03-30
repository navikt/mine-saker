import React from "react";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import SaksIkon from "../../assets/SaksIkon";
import AlertStripe from "nav-frontend-alertstriper";
import Veilederpanel from "nav-frontend-veilederpanel";
import ListeElement from "../liste-element/ListeElement";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData);

  return (
    <Veilederpanel type="plakat" kompakt svg={<SaksIkon />}>
      <div className="saksoversikt-tittel">
        <Systemtittel>Saksoversikt</Systemtittel>
      </div>
      {sakstemaer?.map((sakstema) => (
        <ListeElement key={sakstema.kode} sakstema={sakstema.navn} link={"..."} />
      ))}
      <AlertStripe type="advarsel">
        <Normaltekst>
          Vi jobber for tiden med nye løsninger for innsyn i sak, og det er ikke sikkert alle sakene dine vies her
          akkurat nå. Vi beklager dette, ta kontakt dersom du lurer på noe.
        </Normaltekst>
      </AlertStripe>
    </Veilederpanel>
  );
};

export default Sakstemaliste;

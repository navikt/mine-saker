import React from "react";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import SaksIkon from "../../assets/SaksIkon";
import AlertStripe from "nav-frontend-alertstriper";
import Veilederpanel from "nav-frontend-veilederpanel";
import ChevronlenkeBase from "../chevronlenke/ChevronlenkeBase";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import SakstemaLenke from "../chevronlenke/sakstema-lenke/SakstemaLenke";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData);

  return (
    <Veilederpanel type="plakat" kompakt svg={<SaksIkon />}>
      <div className="saksoversikt-tittel">
        <Systemtittel>Saksoversikt</Systemtittel>
      </div>
      {sakstemaer?.map((sakstema) => (
        <ChevronlenkeBase key={sakstema.kode} dato={sakstema.sistEndret}>
          <SakstemaLenke sakstema={sakstema.navn} kode={sakstema.kode} />
        </ChevronlenkeBase>
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

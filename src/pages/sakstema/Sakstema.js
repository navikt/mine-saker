import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterUrl } from "../../urls";
import fetchData from "../../api";
import { Sidetittel } from "nav-frontend-typografi";
import DokumentListe from "../../components/liste/dokumentliste/DokumentListe";
import Spinner from "../../components/spinner/Spinner";
import FeilMelding from "../../components/feilmelding/Feilmelding";
import "./Sakstema.less";

const Sakstema = () => {
  const { temakode } = useParams();
  const { data, isLoading, isError } = useQuery(`${journalposterUrl}/${temakode}`, fetchData);

  if (isLoading) {
    return <Spinner message="Laster inn siden..." />;
  }

  return (
    <div className="sakstema">
      {isError ? <FeilMelding /> : null}
      <div className="sakstema__tittel">
        <Sidetittel>{data[0].navn}</Sidetittel>
      </div>
      <DokumentListe journalposter={data[0].journalposter} />
    </div>
  );
};

export default Sakstema;

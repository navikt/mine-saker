import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { journalposterURL } from "../../urls";
import fetchData from "../../api";
import { Sidetittel } from "nav-frontend-typografi";
import DokumentListe from "../../components/dokumentliste/DokumentListe";
import "./Sakstema.less";
import Spinner from "../../components/spinner/Spinner";

const Sakstema = () => {
  const { temakode } = useParams();
  const { data, isLoading } = useQuery(`${journalposterURL}?sakstemakode=${temakode}`, fetchData);

  if (!data) {
    return null;
  }

  return (
    <div className="sakstema">
      {isLoading ? <Spinner message="Laster inn siden..." /> : null}
      <div className="sakstema__tittel">
        <Sidetittel>{data[0].navn}</Sidetittel>
      </div>
      <DokumentListe journalposter={data[0].journalposter} />
    </div>
  );
};

export default Sakstema;

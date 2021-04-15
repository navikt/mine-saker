import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { sakstemaerUrl } from "../../urls";
import fetchData from "../../api";
import "./Sakstema.less";
import Sakstemabase from "../../components/sakstemabase/Sakstemabase";

const Sakstema = () => {
  const { data: sakstemaer } = useQuery(sakstemaerUrl, fetchData, { onSuccess: (data) => {} });
  const { temakode } = useParams();

  if (!sakstemaer) {
    return null;
  }

  return (
    <div className="sakstema">
      <Sakstemabase sakstemaer={sakstemaer} temakode={temakode} />
    </div>
  );
};

export default Sakstema;

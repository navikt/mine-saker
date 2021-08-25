import React from "react";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import { fetchResponse } from "../../api";
import PageBase from "../pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = () => {
  const { data } = useQuery(sakstemaerUrl, fetchResponse);

  return (
    <PageBase tittel="Mine Saker" statusCode={data?.statusCode}>
      <Sakstemaliste />
    </PageBase>
  );
};

export default MineSaker;

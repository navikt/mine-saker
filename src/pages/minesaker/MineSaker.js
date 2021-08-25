import React from "react";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import { fetchResponse } from "../../api";
import PageBase from "../pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = () => {
  const {data,isError}= useQuery(sakstemaerUrl, fetchResponse);

  return (
    <PageBase tittel="Mine Saker" isError={false} statusCode={data?.statusCode}>
      <Sakstemaliste />
    </PageBase>
  );
};

export default MineSaker;

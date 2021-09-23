import React from "react";
import { useIntl } from "react-intl";
import Sakstemaliste from "../../components/liste/sakstemaliste/Sakstemaliste";
import { useQuery } from "react-query";
import { sakstemaerUrl } from "../../urls";
import { fetchResponse } from "../../api";
import PageBase from "../pagebase/PageBase";
import "./MineSaker.less";

const MineSaker = () => {
  const { data } = useQuery(sakstemaerUrl, fetchResponse);

  const translate = useIntl();
  const tittel = "mine-saker.hoved.tittel";

  return (
    <PageBase tittel={translate.formatMessage({ id: tittel, defaultMessage: "Mine Saker"})} statusCode={data?.statusCode}>
      <Sakstemaliste />
    </PageBase>
  );
};

export default MineSaker;

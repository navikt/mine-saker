import React from "react";
import { useIntl } from "react-intl";
import { string } from "prop-types";
import { Normaltekst } from "nav-frontend-typografi";
import Liste from "../liste/Liste";
import Lenkeliste from "../liste/lenkeliste/Lenkeliste";
import InformasjoIkon from "../../assets/InformasjonIkon";

const OmSaken = ({ temakode }) => {
  const translate = useIntl();
  const defaultLenkepanelTittel = "default.om-saken-panel-tittel";
  const defaultIngress = "default.ingress";
  let basePath = "sakstema." + temakode + ".ingress";
  const checkValue = translate.formatMessage({ id: basePath });

  if (checkValue === "default") {
    basePath = "default.ingress";
  }

  return (
    <Liste
      tittel={translate.formatMessage({ id: defaultLenkepanelTittel, defaultMessage: "Om saken" })}
      ikon={<InformasjoIkon />}
    >
      <Normaltekst className="om-saken-ingress blokk-xs">
        {translate.formatMessage({ id: basePath, defaultMessage: defaultIngress })}
      </Normaltekst>
      <Lenkeliste />
    </Liste>
  );
};

OmSaken.prototype = {
  temakode: string.isRequired,
};

export default OmSaken;

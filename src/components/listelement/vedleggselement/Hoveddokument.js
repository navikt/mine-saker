import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import DokumentIkon from "../../../assets/DokumentIkon";
import MaskertIkon from "../../../assets/MaskertIkon";
import { formatToReadableDate, setLocaleDate } from "../../../utils/date";


import { Ingress, Undertekst } from "nav-frontend-typografi";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { HoyreChevron } from "nav-frontend-chevron";
import "./Hoveddokument.less";


const Hoveddokument = ({ brukerHarTilgang, tittel, sisteEndret, url }) => {
  setLocaleDate();
  const translate = useIntl();

  return brukerHarTilgang ? (
    <a className="hoveddokument hoveddokument-med-tilgang" href={url}>
      <div className="hoveddokument__innhold">
        <div className="hoveddokument__ikon">
          <DokumentIkon />
        </div>

        <div className="hoveddokument__info">
          <Undertekst>
            {translate.formatMessage({ id:"dokument-sist-endret" }) + " " + formatToReadableDate(sisteEndret)}
          </Undertekst>
          <Ingress>{`${tittel}`}</Ingress>
        </div>
      </div>
      <HoyreChevron className="hoveddokument__chevron" />
    </a>
  ) : (
    <div className="hoveddokument hoveddokument-uten-tilgang">
      <div className="hoveddokument__ikon">
        <MaskertIkon />
      </div>

      <div className="hoveddokument__info">
        <Undertekst>
          {translate.formatMessage({ id:"dokument-sist-endret" }) + " " + formatToReadableDate(sisteEndret)}
        </Undertekst>
        <Ingress>{`${tittel}`}</Ingress>
        <EtikettAdvarsel className="maskert-etiketter__advarsel" mini>
          Dokumentet kan ikke vises
        </EtikettAdvarsel>
      </div>
    </div>
  );
};

Hoveddokument.propTypes = {
  brukerHarTilgang: PropTypes.bool.isRequired,
  tittel: PropTypes.string.isRequired,
  sisteEndret: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Hoveddokument;

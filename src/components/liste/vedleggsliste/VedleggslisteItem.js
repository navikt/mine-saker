import React from "react";
import PropTypes from "prop-types";
import { HoyreChevron } from "nav-frontend-chevron";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { dokumentUrl } from "../../../urls";
import { Ingress } from "nav-frontend-typografi";

const VedleggslisteItem = ({ journalpostId, dokumentId, brukerHarTilgang, tittel, children }) => {
  if (brukerHarTilgang === true) {
    return (
      <li>
        <a className="vedleggslenke" href={`${dokumentUrl}/${journalpostId}/${dokumentId}`}>
          <Ingress>{`${children} (PDF)`}</Ingress> 
          <HoyreChevron className="vedleggslenke__chevron" />
        </a>
      </li>
    );
  } else {
    return (
      <li className="vedleggsliste-item">
        <Ingress className="vedleggsliste-item-ingress">{tittel + " (PDF)"}</Ingress>
        <EtikettAdvarsel className="maskert-etiketter__advarsel" mini>
            Vedlegget kan ikke vises
        </EtikettAdvarsel>
      </li>
    );
  }
};

VedleggslisteItem.propTypes = {
  journalpostId: PropTypes.string.isRequired,
  dokumentId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default VedleggslisteItem;

import React from "react";
import PropTypes from "prop-types";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import { Undertekst } from "nav-frontend-typografi";
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { dokumentUrl } from "../../../urls";

const VedleggslisteItem = ({ journalpostId, dokumentId, brukerHarTilgang, tittel, children }) => {
  
  if(brukerHarTilgang === false) {
    return(
      <li className="vedleggsliste-item">
      <Undertekst className="vedleggsliste-item-undertekst">
        {tittel}
      </Undertekst>
      <EtikettAdvarsel className="maskert-etiketter__advarsel" mini>
        Vedlegget kan ikke vises
      </EtikettAdvarsel>
    </li>
    );
  }

  return (
    <li className="vedleggsliste-item">
      <Lenke className="vedleggslenke" href={`${dokumentUrl}/${journalpostId}/${dokumentId}`}>
        <HoyreChevron className="vedleggslenke__chevron" /> {children}
      </Lenke>
    </li>
  );
};

VedleggslisteItem.propTypes = {
  journalpostId: PropTypes.string.isRequired,
  dokumentId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default VedleggslisteItem;

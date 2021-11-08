import React from "react";
import PropTypes from "prop-types";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import { dokumentUrl } from "../../../urls";

const VedleggslisteItem = ({ journalpostId, dokumentId, brukerHarTilgang, children }) => {
  //Legg inn kosmetiske endringer for hva som skal vises til brukere uten tilgang.
  if(brukerHarTilgang === false) {
    return(
      <li className="vedleggsliste-item">
      <Lenke className="vedleggslenke" href={`${dokumentUrl}/${journalpostId}/${dokumentId}`}>
        <HoyreChevron className="vedleggslenke__chevron" /> {children}
      </Lenke>
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

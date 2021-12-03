import React from "react";
import PropTypes from "prop-types";
import { Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import Spinner from "../spinner/Spinner";
import "./Liste.less";

const Liste = ({ tittel, ikon, children, isLoading }) => {
  const listeIkon = <div className="liste-ikon">{ikon}</div>;

  return (
    <Veilederpanel type="plakat" kompakt svg={listeIkon}>
      <div className="liste">
        <div className={`liste-tittel`}>
          <Systemtittel>{tittel}</Systemtittel>
        </div>
        {isLoading ? <Spinner message="Laster inn siden..." /> : children}
      </div>
    </Veilederpanel>
  );
};

Liste.propTypes = {
  tittel: PropTypes.string.isRequired,
  ikon: PropTypes.node,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Liste;

/*<Tittel>
          Enkelte dokumenter vises ikke her
        </Tittel>
        <Normaltekst>
          Dokumenter som du har sendt inn via vanlig post til NAV og dokumenter sendt inn via tredjepart (leger/andre
          behandlere, advokater, verger, fullmektiger og lignende), vises dessverre ikke her. Vi jobber for å finne en
          løsning, og beklager ulempene dette måtte medføre. Ta <Lenke href={kontaktOssUrl}>kontakt</Lenke> dersom det er
          noe du lurer på.
        </Normaltekst>
        */

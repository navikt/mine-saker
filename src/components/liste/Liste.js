import React from "react";
import PropTypes from "prop-types";
import { Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import "./Liste.less";

const Liste = ({ tittel, ikon, children }) => {
  const listeIkon = <div className="liste-ikon">{ikon}</div>;

  return (
    <Veilederpanel type="plakat" kompakt svg={listeIkon}>
      <div className="liste">
        <div className={`liste-tittel`}>
          <Systemtittel>{tittel}</Systemtittel>
        </div>
        {children}
      </div>
    </Veilederpanel>
  );
};

Liste.propTypes = {
  tittel: PropTypes.string.isRequired,
  ikon: PropTypes.node,
  children: PropTypes.node,
};

export default Liste;

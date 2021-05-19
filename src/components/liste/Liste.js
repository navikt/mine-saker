import React from "react";
import PropTypes from "prop-types";
import { Systemtittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import "./Liste.less";

const Liste = ({ tittel, classname, children, ikon }) => {
  return (
    <Veilederpanel type="plakat" kompakt svg={ikon}>
      <div className="liste">
        <div className={`${classname}-tittel`}>
          <Systemtittel>{tittel}</Systemtittel>
        </div>
        {children}
      </div>
    </Veilederpanel>
  );
};

Liste.propTypes = {
  tittel: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  children: PropTypes.node,
  ikon: PropTypes.node,
};

export default Liste;

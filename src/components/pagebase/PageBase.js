import React from "react";
import PropTypes from "prop-types";
import { Sidetittel } from "nav-frontend-typografi";
import FeilMelding from "../feilmelding/Feilmelding";
import Spinner from "../spinner/Spinner";
import "./PageBase.less";

const PageBase = ({ tittel, isLoading, isError, children }) => {
  if (isLoading) {
    return <Spinner message="Laster inn siden..." />;
  }

  return (
    <div className="page-base">
      <div className="page-wrapper">
        {isError ? <FeilMelding /> : null}
        <Sidetittel className="page-base__tittel">{tittel}</Sidetittel>
        {children}
      </div>
    </div>
  );
};

PageBase.propTypes = {
  tittel: PropTypes.string.isRequired,
  tittelType: PropTypes.string,
  brodsmulesti: PropTypes.any,
};

PageBase.defaultProps = {
  tittelType: "sidetittel",
};

export default PageBase;

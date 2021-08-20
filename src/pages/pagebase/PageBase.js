import React from "react";
import PropTypes from "prop-types";
import { Sidetittel } from "nav-frontend-typografi";
import FeilMelding from "../../components/feilmelding/Feilmelding";
import GenerellFeilmelding from "../../components/feilmelding/GenerellFeilmelding";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import "./PageBase.less";

const PageBase = ({ tittel, breadcrumb, isError, children, statusCode }) => {
  useBreadcrumbs(breadcrumb);

  const visFeilmelding = (isError || statusCode === 206);

  return (
    <div className="page-base">
      <div className="page-wrapper">
        {visFeilmelding ? <GenerellFeilmelding statusCode={statusCode}/> : null}
        <Sidetittel className="page-base__tittel">{tittel}</Sidetittel>
        {children}
      </div>
    </div>
  );
};

PageBase.propTypes = {
  tittel: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

PageBase.defaultProps = {};

export default PageBase;

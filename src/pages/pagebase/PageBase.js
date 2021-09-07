import React from "react";
import PropTypes from "prop-types";
import { Sidetittel } from "nav-frontend-typografi";
import Feilmelding from "../../components/feilmelding/Feilmelding";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import "./PageBase.less";

const PageBase = ({ tittel, breadcrumb, children, statusCode }) => {
  const visFeilmelding = statusCode === 206 || statusCode === 503;
  useBreadcrumbs(breadcrumb);

  return (
    <div className="page-base">
      <div className="page-wrapper">
        {visFeilmelding ? <Feilmelding status={statusCode} /> : null}
        <Sidetittel className="page-base__tittel">{tittel}</Sidetittel>
        {children}
      </div>
    </div>
  );
};

PageBase.propTypes = {
  tittel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageBase.defaultProps = {};

export default PageBase;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Sidetittel } from "nav-frontend-typografi";
import FeilMelding from "../../components/feilmelding/Feilmelding";
import GenerellFeilmelding from "../../components/feilmelding/GenerellFeilmelding";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import "./PageBase.less";

const PageBase = ({ tittel, breadcrumb, children, statusCode }) => {
  const visFeilmelding = (statusCode === 206) || (statusCode === 503);
  useBreadcrumbs(breadcrumb);

  return (
    <div className="page-base">
      <div className="page-wrapper">
        {visFeilmelding ? <GenerellFeilmelding status={statusCode}/> : null}
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

import React from "react";
import PropTypes from "prop-types";
import { Sidetittel } from "nav-frontend-typografi";
import FeilMelding from "../../components/feilmelding/Feilmelding";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import "./PageBase.less";

const PageBase = ({ tittel, breadcrumb, isError, children }) => {
  useBreadcrumbs(breadcrumb);

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
  isError: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

PageBase.defaultProps = {};

export default PageBase;

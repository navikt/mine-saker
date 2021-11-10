import React from "react";
import PropTypes from "prop-types";
import Sakstemaelement from "./sakstemaelement/Sakstemaelement";
import Dokumentelement from "./dokumentelement/Dokumentelement";
import Vedleggselement from "./vedleggselement/Vedleggselement";

const components = (type) =>
  ({
    sakstema: Sakstemaelement,
    dokument: Dokumentelement,
    vedlegg: Vedleggselement,
  }[type]);

const ListeElement = ({ type, ...props }) => {
  const Component = components(type);
  if (!type) {
    return null;
  }

  return <Component {...props} />;
};

ListeElement.propTypes = {
  type: PropTypes.string,
};

ListeElement.defaultProps = {
  type: null,
};

export default ListeElement;

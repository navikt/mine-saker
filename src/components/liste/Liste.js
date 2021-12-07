import React from "react";
import PropTypes from "prop-types";
import Veilederpanel from "nav-frontend-veilederpanel";
import Spinner from "../spinner/Spinner";
import "./Liste.less";

const Liste = ({ ikon, children, isLoading }) => {
  const listeIkon = <div className="liste-ikon">{ikon}</div>;

  return (
    <Veilederpanel type="plakat" kompakt svg={listeIkon}>
      <div className="liste">
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

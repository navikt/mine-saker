import React from "react";
import PropTypes from "prop-types";
import Veilederpanel from "nav-frontend-veilederpanel";
import Spinner from "../spinner/Spinner";
import "./Liste.less";

const Liste = ({ children, isLoading }) => {

  return (
    <Veilederpanel type="plakat" kompakt>
      <div className="liste">
        {isLoading ? <Spinner message="Laster inn siden..." /> : children}
      </div>
    </Veilederpanel>
  );
};

Liste.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Liste;

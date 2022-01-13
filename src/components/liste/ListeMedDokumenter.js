import React from "react";
import PropTypes from "prop-types";
import { Systemtittel } from "nav-frontend-typografi";
import Spinner from "../spinner/Spinner";
import "./ListeMedDokumenter.less";

const ListeMedDokumenter = ({ tittel,children, isLoading }) => {

  return (
      <div className="liste-dokumenter">
        <div className={`liste-dokumenter__tittel`}>
          <Systemtittel>{tittel}</Systemtittel>
        </div>
        {isLoading ? <Spinner message="Laster inn siden..." /> : children}
      </div>
  );
};

ListeMedDokumenter.propTypes = {
  tittel: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default ListeMedDokumenter;

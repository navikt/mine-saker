import React from "react";
import NavFrontendSpinner from "nav-frontend-spinner";
import { Undertittel } from "nav-frontend-typografi";

const Spinner = ({ message = null }) => (
  <div className={"spinner-container"}>
    <NavFrontendSpinner />
    {message && <Undertittel>{message}</Undertittel>}
  </div>
);

export default Spinner;

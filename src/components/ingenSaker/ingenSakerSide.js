import React from "react";
import { Link } from "react-router-dom";
import "nav-frontend-knapper-style";
import Dinosaur from "../../assets/Dinosaur";
import { dittNavUrl } from "../../urls";

import "./IngenSakerSide.less";

const IngenSakerSide = ({ ingress, page }) => {
  let showButton;

  const setShowButton = () => {
    if (page === "saksoversikt") {
      showButton = true;
    }
  };

  setShowButton();

  return (
    <section className="ingen-saker-wrapper">
      <h2 className="ingen-saker-ingress">{ingress}</h2>
      <section className="button-section">
        {showButton ? (
          <Link to="/person/mine-saker/" className="knapp knapp--hoved">
            Gå til saksoversikten
          </Link>
        ) : null}
        <a href={dittNavUrl} className="knapp">
          Gå til forsiden av Ditt NAV
        </a>
      </section>
      <section className="dinosaur-wrapper">
        <Dinosaur></Dinosaur>
      </section>
    </section>
  );
};

export default IngenSakerSide;
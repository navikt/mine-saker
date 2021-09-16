import React from "react";
import { Knapp, Hovedknapp } from 'nav-frontend-knapper';
import Dinosaur from "../../assets/Dinosaur";

import "./IngenSakerSide.less";

const IngenSakerSide = ({ ingress, page }) => {

    let showButton;

    const setShowButton = () => {
        console.log(page)
        if(page === "saksoversikt") {
            showButton = true;
        }
    };

    setShowButton();

    return (
        <section className="ingen-saker-wrapper">
            <h2 className="ingen-saker-ingress">{ingress}</h2>       
            <section className="button-section">
                {showButton ? <Hovedknapp className="til-saksoversikt-knapp">Gå til saksoversikten</Hovedknapp> : null}
                
                <Knapp className="til-forside-knapp">Gå til forsiden av Ditt NAV</Knapp>
            </section>
            <section className="dinosaur-wrapper">
                <Dinosaur></Dinosaur>
            </section>
            
        </section>
    );
};

export default IngenSakerSide;
import React from "react";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import generelleLenker from "./Lenker";
import "./Lenkeliste.less";

const Lenkeliste = () => {
  return (
    <div className="lenkeliste">
      {generelleLenker.map((lenke) => (
        <Lenke className="lenkeliste-item" href={lenke.url}>
          <HoyreChevron className="lenkeliste-item__chevron" /> {lenke.tekst}
        </Lenke>
      ))}
    </div>
  );
};

export default Lenkeliste;

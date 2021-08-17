import React from "react";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import generelleLenker, { dagpengeLenker } from "./Lenker";
import "./Lenkeliste.less";

const Lenkeliste = ({ data }) => {
  return (
    <div className="lenkeliste">
      {data && data[0].kode === "DAG"
        ? dagpengeLenker.map((lenke) => (
            <Lenke className="lenkeliste-item blokk-xxxs" href={lenke.url}>
              <HoyreChevron className="lenkeliste-item__chevron" /> {lenke.tekst}
            </Lenke>
          ))
        : generelleLenker.map((lenke) => (
            <Lenke className="lenkeliste-item blokk-xxxs" href={lenke.url}>
              <HoyreChevron className="lenkeliste-item__chevron" /> {lenke.tekst}
            </Lenke>
          ))}
    </div>
  );
};

export default Lenkeliste;

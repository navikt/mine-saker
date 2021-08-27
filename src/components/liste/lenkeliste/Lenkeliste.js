import React from "react";
import { useParams } from "react-router-dom";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import useTemaException from "../../../hooks/useTemaException";
import lenker from "./Lenker";
import "./Lenkeliste.less";

const Lenkeliste = () => {
  const { temakode } = useParams();
  const isTemaException = useTemaException(temakode);
  const lenkeKey = isTemaException ? temakode : "GENERELLE";

  return (
    <div className="lenkeliste">
      {console.log(temakode)}
      {lenker[lenkeKey].map((lenke) => (
        <Lenke className="lenkeliste-item blokk-xxxs" href={lenke.url}>
          <HoyreChevron className="lenkeliste-item__chevron" /> {lenke.tekst}
        </Lenke>
      ))}
    </div>
  );
};

export default Lenkeliste;

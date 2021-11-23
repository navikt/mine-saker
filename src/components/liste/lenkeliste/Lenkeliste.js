import React from "react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import { listOfActions, logAmplitudeEvent } from "../../../utils/amplitude";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import useTemaException from "../../../hooks/useTemaException";
import lenker from "./Lenker";
import "./Lenkeliste.less";

const Lenkeliste = () => {
  const { temakode } = useParams();
  const isTemaException = useTemaException(temakode);
  const lenkeKey = isTemaException ? temakode : "GENERELLE";

  const translate = useIntl();

  return (
    <div className="lenkeliste">
      {lenker[lenkeKey].map((lenke) => (
        <Lenke
          className="lenkeliste-item blokk-xxxs"
          href={lenke.url}
          key={lenke.tekst}
          onClick={() => logAmplitudeEvent(translate.formatMessage({ id: lenke.tekst }), listOfActions.trykkPaaLenke)}
        >
          <HoyreChevron className="lenkeliste-item__chevron" /> {translate.formatMessage({ id: lenke.tekst })}
        </Lenke>
      ))}
    </div>
  );
};

export default Lenkeliste;

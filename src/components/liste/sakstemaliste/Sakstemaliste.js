import React from "react";
import { useQuery } from "react-query";
import { fetchResponse } from "../../../api";
import { sakstemaerUrl } from "../../../urls";
import Liste from "../Liste";
import ListeElement from "../../listelement/ListeElement";
import IngenSakerSide from "../../ingenSaker/IngenSakerSide";
import InlineListeDisclaimer from "../../disclaimer/InlineListeDisclaimer";
import "./Sakstemaliste.less";

const Sakstemaliste = () => {
  const { data: sakstemaer, isLoading, isSuccess } = useQuery(sakstemaerUrl, fetchResponse);
  const visIngenSaker = sakstemaer?.data.length === 0 && isSuccess && sakstemaer?.statusCode === 200;

  return (
    <>
      {visIngenSaker ? (
        <IngenSakerSide useBothButtons={false} ingress="Du har foreløpig ingen registrerte saker" />
      ) : (
        <Liste
          isLoading={isLoading}
        >
          {sakstemaer &&
            sakstemaer?.data.map((sakstema) => (
              <div key={sakstema.kode} role="link">
                <ListeElement
                  type="sakstema"
                  key={sakstema.kode}
                  dato={sakstema.sistEndret}
                  tekst={sakstema.navn}
                  kode={sakstema.kode}
                  sakstemaUrl={sakstema.detaljvisningUrl}
                />
              </div>
            ))
          }
          <InlineListeDisclaimer plassering="saksoversikt"/>
        </Liste>
      )}
    </>
  );
};

export default Sakstemaliste;

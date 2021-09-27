import { rest } from "msw";

const addJournalposterToSakstema = (sakstema) => {
  const journalposter = require("./journalposter.json");
  journalposter[0]["navn"] = sakstema.navn;
  journalposter[0]["kode"] = sakstema.kode;

  return journalposter;
};

const journalposter = (sakstemakode) => {
  const sakstemaer = {
    AAP: { navn: "Arbeidsavklaringspenger", kode: "AAP" },
    AGR: { navn: "Ajourhold - Grunnopplysninger", kode: "AGR" },
    BAR: { navn: "Barnetrygd", kode: "BAR" },
    DAG: { navn: "Dagpenger", kode: "DAG" },
    ENF: { navn: "Enslig forsørger", kode: "ENF" },
    ERS: { navn: "Erstatning", kode: "ERS" },
    FEI: { navn: "Feilutbetaling", kode: "FEI" },
    FOR: { navn: "Foreldre- og svangerskapspenger", kode: "FOR" },
    FUL: { navn: "Fullmakt", kode: "FUL" },
    GEN: { navn: "Generell", kode: "GEN" },
    GRA: { navn: "Gravferdsstønad", kode: "GRA" },
    HJE: { navn: "Hjelpemidler", kode: "HJE" },
    IND: { navn: "Tiltakspenger", kode: "IND" },
    MED: { navn: "Medlemskap", kode: "MED" },
    MOB: { navn: "Mobilitetsfremmende stønad", kode: "MOB" },
    OPP: { navn: "Oppfølging", kode: "OPP" },
    PEN: { navn: "Pensjon", kode: "PEN" },
    PER: { navn: "Permittering og masseoppsigelser", kode: "PER" },
    RVE: { navn: "Rettferdsvederlag", kode: "RVE" },
    SAK: { navn: "Saksomkostninger", kode: "SAK" },
    SER: { navn: "Serviceklager", kode: "SER" },
    SUP: { navn: "Supplerende stønad", kode: "SUP" },
    SYK: { navn: "Sykepenger", kode: "SYK" },
    SYM: { navn: "Sykmeldinger", kode: "SYM" },
    TRK: { navn: "Trekkhåndtering", kode: "TRK" },
    TSO: { navn: "Tilleggsstønad", kode: "TSO" },
    TSR: { navn: "Tilleggsstønad arbeidssøkere", kode: "TSR" },
    UFM: { navn: "Unntak fra medlemskap", kode: "UFM" },
    UFO: { navn: "Uføretrygd", kode: "UFO" },
    VEN: { navn: "Ventelønn", kode: "VEN" },
    YRK: { navn: "Yrkesskade", kode: "YRK" },
  };

  return addJournalposterToSakstema(sakstemaer[sakstemakode]);
};

export default function get(endpoint, response, statusCode = 200) {
  return rest.get(endpoint, (req, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(response ? response : {}));
  });
}

export function getJournalposterWithParams(endpoint, response, statusCode = 200) {
  return rest.get(endpoint, (req, res, ctx) => {
    const sakstemakode = req.url.searchParams.get("sakstemakode");

    return res(ctx.status(statusCode), ctx.json([]));
  });
}

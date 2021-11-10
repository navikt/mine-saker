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
    AAR: { navn: "AA-registeret", kode: "AAR" },
    AGR: { navn: "Ajourhold - Grunnopplysninger", kode: "AGR" },
    BAR: { navn: "Barnetrygd", kode: "BAR" },
    BID: { navn: "Bidrag", kode: "BID" },
    BIL: { navn: "Bil", kode: "BIL" },
    DAG: { navn: "Dagpenger", kode: "DAG" },
    ENF: { navn: "Enslig forsørger", kode: "ENF" },
    ERS: { navn: "Erstatning", kode: "ERS" },
    FAR: { navn: "Farskap", kode: "FAR" },
    FEI: { navn: "Feilutbetaling", kode: "FEI" },
    FOR: { navn: "Foreldre- og svangerskapspenger", kode: "FOR" },
    FOS: { navn: "Forsikring", kode: "FOS" },
    FRI: { navn: "Kompensasjon selvstendig næringsdrivende/frilansere", kode: "FRI" },
    FUL: { navn: "Fullmakt", kode: "FUL" },
    GEN: { navn: "Generell", kode: "GEN" },
    GRA: { navn: "Gravferdsstønad", kode: "GRA" },
    GRU: { navn: "Grunn- og hjelpestønad", kode: "GRU" },
    HEL: { navn: "Helsetjenester og ort. hjelpemidler", kode: "HEL" },
    HJE: { navn: "Hjelpemidler", kode: "HJE" },
    IAR: { navn: "Inkluderende arbeidsliv", kode: "IAR" },
    IND: { navn: "Tiltakspenger", kode: "IND" },
    KOM: { navn: "Kommunale tjenester", kode: "KOM" },
    KON: { navn: "Kontantstøtte", kode: "KON" },
    MED: { navn: "Medlemskap", kode: "MED" },
    MOB: { navn: "Mobilitetsfremmende stønad", kode: "MOB" },
    OMS: { navn: "Omsorgspenger, Pleiepenger og Opplæringspenger", kode: "OMS" },
    OPA: { navn: "Oppfølging - Arbeidsgiver", kode: "OPA" },
    OPP: { navn: "Oppfølging", kode: "OPP" },
    PEN: { navn: "Pensjon", kode: "PEN" },
    PER: { navn: "Permittering og masseoppsigelser", kode: "PER" },
    REH: { navn: "Rehabilitering", kode: "REH" },
    REK: { navn: "Rekruttering og stilling", kode: "REK" },
    RPO: { navn: "Retting av personopplysninger", kode: "RPO" },
    RVE: { navn: "Rettferdsvederlag", kode: "RVE" },
    SAA: { navn: "Sanksjon - Arbeidsgiver", kode: "SAA" },
    SAK: { navn: "Saksomkostninger", kode: "SAK" },
    SAP: { navn: "Sanksjon - Person", kode: "SAP" },
    SER: { navn: "Serviceklager", kode: "SER" },
    SIK: { navn: "Sikkerhetstiltak", kode: "SIK" },
    STO: { navn: "Regnskap/utbetaling", kode: "STO" },
    SUP: { navn: "Supplerende stønad", kode: "SUP" },
    SYK: { navn: "Sykepenger", kode: "SYK" },
    SYM: { navn: "Sykmeldinger", kode: "SYM" },
    TIL: { navn: "Tiltak", kode: "TIL" },
    TRK: { navn: "Trekkhåndtering", kode: "TRK" },
    TRY: { navn: "Trygdeavgift", kode: "TRY" },
    TSO: { navn: "Tilleggsstønad", kode: "TSO" },
    TSR: { navn: "Tilleggsstønad arbeidssøkere", kode: "TSR" },
    UFM: { navn: "Unntak fra medlemskap", kode: "UFM" },
    UFO: { navn: "Uføretrygd", kode: "UFO" },
    UKJ: { navn: "Ukjent", kode: "UKJ" },
    VEN: { navn: "Ventelønn", kode: "VEN" },
    YRA: { navn: "Yrkesrettet attføring", kode: "YRA" },
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

    return res(ctx.status(statusCode), ctx.json(sakstemakode ? journalposter(sakstemakode) : {}));
  });
}

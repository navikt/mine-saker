import { rest } from "msw";

const journalposter = (sakstemakode) =>
  ({
    AAP: require("./journalposter/aap.json"),
    AGR: require("./journalposter/agr.json"),
    BAR: require("./journalposter/bar.json"),
    DAG: require("./journalposter/dag.json"),
    ENF: require("./journalposter/enf.json"),
    ERS: require("./journalposter/ers.json"),
    FEI: require("./journalposter/fei.json"),
    FOR: require("./journalposter/frs.json"),
    FUL: require("./journalposter/ful.json"),
    GEN: require("./journalposter/gen.json"),
    GRA: require("./journalposter/gra.json"),
    HJE: require("./journalposter/hje.json"),
    IND: require("./journalposter/ind.json"),
    MED: require("./journalposter/med.json"),
    MOB: require("./journalposter/mob.json"),
    OPP: require("./journalposter/opp.json"),
    PEN: require("./journalposter/pen.json"),
    PER: require("./journalposter/per.json"),
    RVE: require("./journalposter/rve.json"),
    SAK: require("./journalposter/sak.json"),
    SER: require("./journalposter/ser.json"),
    SUP: require("./journalposter/sup.json"),
    SYK: require("./journalposter/syk.json"),
    SYM: require("./journalposter/sym.json"),
    TRK: require("./journalposter/trk.json"),
    TSO: require("./journalposter/tso.json"),
    TSR: require("./journalposter/tsr.json"),
    UFM: require("./journalposter/ufm.json"),
    UFO: require("./journalposter/ufo.json"),
    VEN: require("./journalposter/ven.json"),
    YRK: require("./journalposter/yrk.json"),
  }[sakstemakode]);

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

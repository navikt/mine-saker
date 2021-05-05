import getEnvironment from "./utils/environmnet";

const MINE_SAKER_URL = {
  local: "https://localhost:3000/person/mine-saker",
  development: "https://mine-saker.dev.nav.no/person/mine-saker",
  production: "https://www.intern.nav.no/person/mine-saker",
};

const MINE_SAKER_API_URL = {
  local: "https://www.api.nav.no/person/mine-saker-api",
  development: "https://mine-saker-api.dev.nav.no/person/mine-saker-api",
  production: "https://mine-saker-api.intern.nav.no/person/mine-saker-api",
};

export const mineSakerUrl = MINE_SAKER_URL[getEnvironment()];
export const mineSakerApiUrl = MINE_SAKER_API_URL[getEnvironment()];
export const sakstemaerUrl = `${mineSakerApiUrl}/sakstemaer`;
export const journalposterUrl = `${mineSakerApiUrl}/journalposter`;
export const dokumentUrl = `${mineSakerApiUrl}/dokument`;
export const statusUrl = `${mineSakerApiUrl}/login/status`;
export const loginUrl = `${mineSakerApiUrl}/login`;

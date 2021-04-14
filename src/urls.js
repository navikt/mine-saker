const getEnvironment = () => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
};

const MINE_SAKER_URL = {
  development: "https://localhost:3000/person/mine-saker",
  production: "https://mine-saker.dev.nav.no/person/mine-saker",
};

const SAKSTEMAER_URL = {
  development: "https://www.api.nav.no/person/mine-saker-api/sakstemaer",
  production: "https://mine-saker-api.dev.nav.no/person/mine-saker-api/sakstemaer",
};

const JOURNALPOSTER_URL = {
  development: "https://www.api.nav.no/person/mine-saker-api/journalposter",
  production: "https://mine-saker-api.dev.nav.no/person/mine-saker-api/journalposter",
};

const STATUS_URL = {
  development: "https://www.api.nav.no/person/mine-saker-api/login/status",
  production: "https://mine-saker-api.dev.nav.no/person/mine-saker-api/login/status",
};

const LOGIN_URL = {
  development: `https://www.api.nav.no/person/mine-saker-api/login?level=4`,
  production: `https://mine-saker-api.dev.nav.no/person/mine-saker-api/login?level=4`,
};

export const mineSakerUrl = MINE_SAKER_URL[getEnvironment()];
export const sakstemaerUrl = SAKSTEMAER_URL[getEnvironment()];
export const journalposterURL = JOURNALPOSTER_URL[getEnvironment()];
export const statusUrl = STATUS_URL[getEnvironment()];
export const loginUrl = LOGIN_URL[getEnvironment()];

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

const LOGINSERVICE_URL = {
  local: "https://www.api.loginservice.nav.no/login",
  development: "https://loginservice.dev.nav.no/login?level=Level4",
  production: "https://loginservice.nav.no/login?level=Level4",
};

const INNLOGGINGSSTATUS = {
  local: "https://www.api.innlogginsstatus.nav.no/auth",
  development: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
  production: "https://www.nav.no/person/innloggingsstatus/auth",
};

const SOSIALHJELP = {
  local: "https://localhost:3000/sosialhjelp/innsyn",
  development: "https://www-q1.dev.nav.no/sosialhjelp/innsyn",
  production: "https://www.nav.no/sosialhjelp/innsyn",
};

const DAGPENGER = {
  local: "https://localhost:3000/arbeid/dagpenger/mine-dagpenger",
  development: "https://arbeid.dev.nav.no/arbeid/dagpenger/mine-dagpenger",
  production: "https://www.nav.no/arbeid/dagpenger/mine-dagpenger",
};

export const mineSakerUrl = MINE_SAKER_URL[getEnvironment()];
export const mineSakerApiUrl = MINE_SAKER_API_URL[getEnvironment()];

export const sakstemaerUrl = `${mineSakerApiUrl}/sakstemaer`;
export const journalposterUrl = `${mineSakerApiUrl}/journalposter`;
export const dokumentUrl = `${mineSakerApiUrl}/dokument`;
export const statusUrl = `${mineSakerApiUrl}/login/status`;
export const loginUrl = `${mineSakerApiUrl}/login`;

export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
export const innloggingsstatusUrl = INNLOGGINGSSTATUS[getEnvironment()];

export const sosialhjelpUrl = SOSIALHJELP[getEnvironment()];
export const dagpengerUrl = DAGPENGER[getEnvironment()];

export const kontaktOssUrl = "https://www.nav.no/person/kontakt-oss";
export const tilbakemeldingerUrl = "https://www.nav.no/person/kontakt-oss/tilbakemeldinger";
export const opplysningspliktUrl =
  "https://www.nav.no/no/nav-og-samfunn/om-nav/relatert-informasjon/du-har-plikt-til-a-gi-nav-riktige-opplysninger";
export const saksbehandlingstiderUrl = "https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav";

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

const ETTERSENDING = {
  local: "https://localhost:3000/arbeid/saksoversikt/ettersending",
  development: "https://tjenester-q1.nav.no/saksoversikt/ettersending",
  production: "https://tjenester.nav.no/saksoversikt/ettersending",
};

const HJELPEMIDLER ={
  local: "https://localhost:3000//hjelpemidler/dinehjelpemidler",
  development: "https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler",
  production:"https://www.nav.no/hjelpemidler/dinehjelpemidler",
}


export const mineSakerUrl = MINE_SAKER_URL[getEnvironment()];
export const mineSakerApiUrl = MINE_SAKER_API_URL[getEnvironment()];

export const sakstemaerUrl = `${mineSakerApiUrl}/sakstemaer`;
export const journalposterUrl = `${mineSakerApiUrl}/journalposter`;
export const dokumentUrl = `${mineSakerApiUrl}/dokument`;
export const statusUrl = `${mineSakerApiUrl}/login/status`;
export const loginUrl = `${mineSakerApiUrl}/login`;

export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
export const innloggingsstatusUrl = INNLOGGINGSSTATUS[getEnvironment()];

export const hjelpemidlerUrl = HJELPEMIDLER[getEnvironment()];
export const sosialhjelpUrl = SOSIALHJELP[getEnvironment()];
export const dagpengerUrl = DAGPENGER[getEnvironment()];
export const lastOppVedleggUrl = ETTERSENDING[getEnvironment()];

export const kontaktOssUrl = "https://www.nav.no/person/kontakt-oss";
export const tilbakemeldingerUrl = "https://www.nav.no/person/kontakt-oss/tilbakemeldinger";
export const opplysningspliktUrl =
  "https://www.nav.no/no/nav-og-samfunn/om-nav/relatert-informasjon/du-har-plikt-til-a-gi-nav-riktige-opplysninger";
export const saksbehandlingstiderUrl = "https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav";
export const foreldrepengerUrl = "https://foreldrepenger.nav.no/";
export const sosialhjelpVeiviserUrl = "https://tjenester.nav.no/veivisersosialhjelp";
export const klagerettigheterUrl = "https://nav.no/no/nav-og-samfunn/kontakt-nav/klage-ris-og-ros/klagerettigheter";
export const sosialhjelpAktivitetUrl = "https://nav.no/sosialhjelp";
export const arbeidsavklaringspengerUrl = "https://www.nav.no/aap";
export const sykemeldingerUrl = "https://tjenester.nav.no/sykefravaer/sykmeldinger";
export const lesmeromdagpengerUrl = "https://www.nav.no/arbeid/no";
export const stonadervedtiltakUrl = "https://www.nav.no/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb/stonader-ved-tiltak";

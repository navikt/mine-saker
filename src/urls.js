const MINE_SAKER_URL = {
  local: "http://localhost:3000/mine-saker",
  development: "https://person.dev.nav.no/mine-saker",
  production: "https://person.nav.no/mine-saker",
};

const MINE_SAKER_REDIRECT_URL = {
  local: "http://localhost:3000",
  development: "https://person.dev.nav.no",
  production: "https://person.nav.no",
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

const HJELPEMIDLER = {
  local: "https://localhost:3000//hjelpemidler/dinehjelpemidler",
  development: "https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler",
  production: "https://www.nav.no/hjelpemidler/dinehjelpemidler",
};

const DITT_NAV = {
  local: "https://localhost:3000/person/dittnav/",
  development: "https://www.dev.nav.no/person/dittnav/",
  production: "https://www.nav.no/person/dittnav/",
};

const SYKEMELDINGER = {
  local: "https://localhost:3000/syk/sykmeldinger",
  development: "https://www-gcp.dev.nav.no/syk/sykmeldinger/",
  production: "https://www.nav.no/syk/sykmeldinger",
};

const ENVIRONMENT = window.env.ENVIRONMENT;

export const mineSakerApiUrl = window.env.MINE_SAKER_API_URL;
export const loginserviceUrl = window.env.LOGINSERVICE_URL;
export const innloggingsstatusUrl = window.env.INNLOGGINGSSTATUS;

export const sakstemaerUrl = `${mineSakerApiUrl}/sakstemaer`;
export const journalposterUrl = `${mineSakerApiUrl}/journalposter`;
export const dokumentUrl = `${mineSakerApiUrl}/dokument`;
export const statusUrl = `${mineSakerApiUrl}/login/status`;
export const loginUrl = `${mineSakerApiUrl}/login`;

export const mineSakerUrl = MINE_SAKER_URL[ENVIRONMENT];

export const sykemeldingerUrl = SYKEMELDINGER[ENVIRONMENT];
export const sykefravaerUrl = window.env.SYKEFRAVER_URL;
export const hjelpemidlerUrl = HJELPEMIDLER[ENVIRONMENT];
export const sosialhjelpUrl = SOSIALHJELP[ENVIRONMENT];
export const dagpengerUrl = DAGPENGER[ENVIRONMENT];
export const lastOppVedleggUrl = ETTERSENDING[ENVIRONMENT];
export const dittNavUrl = DITT_NAV[ENVIRONMENT];

export const mineSakerRedirectUrl = MINE_SAKER_REDIRECT_URL[ENVIRONMENT];

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
export const lesmeromdagpengerUrl = "https://www.nav.no/arbeid/no";
export const stonadervedtiltakUrl =
  "https://www.nav.no/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb/stonader-ved-tiltak";
export const gamleSaksoversiktUrl = "https://tjenester.nav.no/saksoversikt";

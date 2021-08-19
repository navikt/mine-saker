import {
  dagpengerUrl,
  foreldrepengerUrl,
  hjelpemidlerUrl,
  kontaktOssUrl,
  lastOppVedleggUrl,
  opplysningspliktUrl,
  saksbehandlingstiderUrl,
  tilbakemeldingerUrl,
} from "../../../urls";

const generelleLenker = [
  {
    url: kontaktOssUrl,
    tekst: "Kontakt oss",
  },
  {
    url: tilbakemeldingerUrl,
    tekst: "Send klage",
  },
  {
    url: opplysningspliktUrl,
    tekst: "Meld fra om endringer",
  },
  {
    url: lastOppVedleggUrl,
    tekst: "Last opp vedlegg",
  },
  {
    url: saksbehandlingstiderUrl,
    tekst: "Saksbehandlingstider",
  },
];

const dagpengeLenker = [
  {
    url: dagpengerUrl,
    tekst: "Mine dagpenger",
  },
  ...generelleLenker,
];

const hjelpemidlerLenker = [
  {
    url: hjelpemidlerUrl,
    tekst: "Dine hjelpemidler",
  },
  ...generelleLenker,
];

const foreldrepengerLenker = [
  {
    url: foreldrepengerUrl,
    tekst: "Dine foreldrepenger",
  },
  ...generelleLenker,
];

const lenker = {
  GENERELLE: generelleLenker,
  DAG: dagpengeLenker,
  HJE: hjelpemidlerLenker,
  FOR: foreldrepengerLenker,
};

export default lenker;

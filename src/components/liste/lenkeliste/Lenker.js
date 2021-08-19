import { dagpengerUrl, foreldrepengerUrl, hjelpemidlerUrl, klagerettigheterUrl } from "../../../urls";
import { kontaktOssUrl, lastOppVedleggUrl, opplysningspliktUrl, saksbehandlingstiderUrl } from "../../../urls";
import { sosialhjelpAktivitetUrl, sosialhjelpVeiviserUrl, tilbakemeldingerUrl } from "../../../urls";

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

const sosialhjelpLenker = [
  {
    url: kontaktOssUrl,
    tekst: "Kontakt oss",
  },
  {
    url: klagerettigheterUrl,
    tekst: "Klagerettigheter",
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
    url: sosialhjelpVeiviserUrl,
    tekst: "Les mer om økonomisk sosialhjelp",
  },
  {
    url: sosialhjelpAktivitetUrl,
    tekst: "Krav om aktivitet",
  },
];

const lenker = {
  GENERELLE: generelleLenker,
  DAG: dagpengeLenker,
  HJE: hjelpemidlerLenker,
  FOR: foreldrepengerLenker,
  KOM: sosialhjelpLenker,
};

export default lenker;

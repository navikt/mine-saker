import { dagpengerUrl, foreldrepengerUrl, hjelpemidlerUrl, klagerettigheterUrl, lesmeromdagpengerUrl, stonadervedtiltakUrl, sykemeldingerUrl } from "../../../urls";
import { kontaktOssUrl, lastOppVedleggUrl, opplysningspliktUrl, saksbehandlingstiderUrl } from "../../../urls";
import { sosialhjelpAktivitetUrl, sosialhjelpVeiviserUrl, tilbakemeldingerUrl } from "../../../urls";
import { arbeidsavklaringspengerUrl } from "../../../urls";

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
  {
    url: lesmeromdagpengerUrl,
    tekst: "Les mer om dagpenger",
  },
  ...generelleLenker,
];

const arbeidsavklaringspengerLenker = [
  {
    url: arbeidsavklaringspengerUrl,
    tekst: "Om Arbeidsavklaringspenger",
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

const sykefravaerLenker = [
  {
    url: sykemeldingerUrl,
    tekst: "Dine sykemeldinger",
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

const tiltakspengerLenker = [
  {
    url: stonadervedtiltakUrl,
    tekst: "Les mer om tiltakspenger",
  },
  ...generelleLenker,
];

const lenker = {
  GENERELLE: generelleLenker,
  DAG: dagpengeLenker,
  HJE: hjelpemidlerLenker,
  FOR: foreldrepengerLenker,
  KOM: sosialhjelpLenker,
  AAP: arbeidsavklaringspengerLenker,
  SYK: sykefravaerLenker,
  IND: tiltakspengerLenker,
};

export default lenker;

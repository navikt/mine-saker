import { dagpengerUrl, foreldrepengerUrl, hjelpemidlerUrl, klagerettigheterUrl, lesmeromdagpengerUrl, sosialhjelpUrl, stonadervedtiltakUrl, sykemeldingerUrl } from "../../../urls";
import { kontaktOssUrl, lastOppVedleggUrl, opplysningspliktUrl, saksbehandlingstiderUrl } from "../../../urls";
import { sosialhjelpAktivitetUrl, sosialhjelpVeiviserUrl, tilbakemeldingerUrl } from "../../../urls";
import { arbeidsavklaringspengerUrl } from "../../../urls";

const generelleLenker = [
  {
    url: kontaktOssUrl,
    tekst: "generelle-lenker.kontakt-oss", //Value: N: "Kontakt oss", E: "Contact us"
    amplitudeIdentifier: "kontaktoss"
  },
  {
    url: tilbakemeldingerUrl,
    tekst: "generelle-lenker.send-klage", //Value: N: "Send klage", E: "Send complaint"
    amplitudeIdentifier: "sendklage"
  },
  {
    url: opplysningspliktUrl,
    tekst: "generelle-lenker.meld-fra-om-endringer", //Value: N: "Meld fra om endringer", E: 
    amplitudeIdentifier: "meldendringer"
  },
  {
    url: lastOppVedleggUrl,
    tekst: "generelle-lenker.last-opp-vedlegg", //Value: N: "Last opp vedlegg", E:
    amplitudeIdentifier: "lastoppvedlegg"
  },
  {
    url: saksbehandlingstiderUrl,
    tekst: "generelle-lenker.saksbehandlingstider", //Value: N: "Saksbehandlingstider"
    amplitudeIdentifier: "saksbehandlingstider"
  },
];

const dagpengeLenker = [
  {
    url: dagpengerUrl,
    tekst: "dagpenger-lenker.mine-dagpenger", //Value: N: "Mine dagpenger", E:
  },
  {
    url: lesmeromdagpengerUrl,
    tekst: "dagpenger-lenker.les-mer-om-dagpenger", //Value: N: "Les mer om dagpenger", E:
  },
  ...generelleLenker,
];

const arbeidsavklaringspengerLenker = [
  {
    url: arbeidsavklaringspengerUrl,
    tekst: "arbeidsavklaringspenger-lenker.om-arbeidsavklaringspenger", //Value: N: "Om Arbeidsavklaringspenger", E:
  },
  ...generelleLenker,
];

const hjelpemidlerLenker = [
  {
    url: hjelpemidlerUrl,
    tekst: "hjelpemidler-lenker.dine-hjelpemidler", //Value: N: "Dine hjelpemidler", E:
  },
  ...generelleLenker,
];

const foreldrepengerLenker = [
  {
    url: foreldrepengerUrl,
    tekst: "foreldrepenger-lenker.dine-foreldrepenger", //Value: N: "Dine foreldrepenger", E:
  },
  ...generelleLenker,
];

const sykefravaerLenker = [
  {
    url: sykemeldingerUrl,
    tekst: "sykefravaer-lenker.dine-sykemeldinger", //Value: N: "Dine sykemeldinger", E:
  },
  ...generelleLenker,
];

const sosialhjelpLenker = [
  {
    url: sosialhjelpUrl,
    tekst: "Din økonomiske sosialhjelp",
  },
  {
    url: kontaktOssUrl,
    tekst: "sosialhjelp-lenker.kontakt-oss", //Value: N: "Kontakt oss", E:
  },
  {
    url: klagerettigheterUrl,
    tekst: "sosialhjelp-lenker.klagerettigheter", //Value: N: "Klagerettigheter", E:
  },
  {
    url: opplysningspliktUrl,
    tekst: "sosialhjelp-lenker.meld-fra-om-endringer", //Value: N: "Meld fra om endringer", E:
  },
  {
    url: lastOppVedleggUrl,
    tekst: "sosialhjelp-lenker.last-opp-vedlegg", //Value: N: "Last opp vedlegg", E:
  },
  {
    url: sosialhjelpVeiviserUrl,
    tekst: "sosialhjelp-lenker.les-mer", //Value: N: "Les mer om økonomisk sosialhjelp", E:
  },
  {
    url: sosialhjelpAktivitetUrl,
    tekst: "sosialhjelp-lenker.krav-om-aktivitet", //Value: N: "Krav om aktivitet", E:
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

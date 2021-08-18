import {
  dagpengerUrl,
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

export const dagpengeLenker = [
  ...generelleLenker,
  {
    url: dagpengerUrl,
    tekst: "Mine dagpenger",
  },
];

export default generelleLenker;

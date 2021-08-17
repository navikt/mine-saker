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
    tekst: "Tilbakemeldinger",
  },
  {
    url: opplysningspliktUrl,
    tekst: "Opplysningsplikt",
  },
  {
    url: saksbehandlingstiderUrl,
    tekst: "Saksbehandlingstider",
  },
  {
    url: lastOppVedleggUrl,
    tekst: "Last opp vedlegg",
  },
];

export const dagpengeLenker = [
  {
    url: kontaktOssUrl,
    tekst: "Kontakt oss",
  },
  {
    url: tilbakemeldingerUrl,
    tekst: "Tilbakemeldinger",
  },
  {
    url: opplysningspliktUrl,
    tekst: "Opplysningsplikt",
  },
  {
    url: saksbehandlingstiderUrl,
    tekst: "Saksbehandlingstider",
  },
  {
    url: lastOppVedleggUrl,
    tekst: "Last opp vedlegg",
  },
  {
    url: dagpengerUrl,
    tekst: "Mine dagpenger",
  },
];

export default generelleLenker;

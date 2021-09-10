import { shape, arrayOf, string, bool } from "prop-types";
import DokumentType from "./DokumentType";

const avsenderMottaker = shape({
  innloggetBrukerErAvsender: bool.isRequired,
  type: string.isRequired,
});

const JournalpostType = shape({
  tittel: string.isRequired,
  journalpostId: string.isRequired,
  journalposttype: string.isRequired,
  harVedlegg: bool,
  avsenderMottaker: avsenderMottaker,
  sisteEndret: string.isRequired,
  dokumenter: arrayOf(DokumentType),
});

export default JournalpostType;

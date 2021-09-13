import { shape, string, bool } from "prop-types";

const DokumentType = shape({
  tittel: string.isRequired,
  dokumentInfoId: string.isRequired,
  brukerHarTilgang: bool.isRequired,
  dokumenttype: string,
});

export default DokumentType;

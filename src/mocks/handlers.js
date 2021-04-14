import get, { getJournalposterWithParams } from "./msw-utils";
import sakstemaer from "./saksetmaer.json";
import status from "./status.json";

export const handlers = [
  get("https://www.api.nav.no/person/mine-saker-api/login/status", status),
  get("https://www.api.nav.no/person/mine-saker-api/sakstemaer", sakstemaer),
  getJournalposterWithParams("https://www.api.nav.no/person/mine-saker-api/journalposter"),
];

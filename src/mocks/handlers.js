import get, { getJournalposterWithParams } from "./msw-utils";
import sakstemaer from "./saksetmaer.json";
import status from "./status.json";
import innloggingsstatus from "./innloggingsstatus";

export const handlers = [
  get("https://www.api.nav.no/person/mine-saker-api/login/status", status),
  get("https://www.api.nav.no/person/mine-saker-api/sakstemaer", sakstemaer),
  get("https://www.api.innlogginsstatus.nav.no/auth", innloggingsstatus),
  getJournalposterWithParams("https://www.api.nav.no/person/mine-saker-api/journalposter"),
];

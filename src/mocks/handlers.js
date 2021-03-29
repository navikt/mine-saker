import get from "./msw-utils";
import sakstemaer from "./saksetmaer.json";

export const handlers = [get("https://www.api.nav.no/person/mine-saker-api/sakstemaer", sakstemaer)];

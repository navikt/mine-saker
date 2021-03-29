const getEnvironment = () => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
};

const SAKSTEMAER_URL = {
  development: "https://www.api.nav.no/person/mine-saker-api/sakstemaer",
  production: "https://mine-saker-api.dev.nav.no/mine-saker-api/sakstemaer",
};

export const sakstemaerUrl = SAKSTEMAER_URL[getEnvironment()];

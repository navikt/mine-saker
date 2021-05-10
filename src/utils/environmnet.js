const isProduction = window.location.href.includes("www");
const isDevelopment = window.location.href.includes("mine-saker.dev");

const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

export default getEnvironment;
import * as Sentry from "@sentry/browser";

const initializeSentry = () => {
  Sentry.init({
    dsn: "https://19b18fa0d4724106835ae5ca41085ea2@sentry.gc.nav.no/100",
    autoSessionTracking: false,
  });
};

export default initializeSentry;

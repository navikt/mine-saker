import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./providers/Providers";
import Authentication from "./components/authentication/Authentication";
import { injectDecoratorClientSide } from "@navikt/nav-dekoratoren-moduler/csr";
import { initializeAmplitude } from "./utils/amplitude";
import initializeSentry from "./utils/logging";
import "./index.less";

const startMockWorker = async () => {
  const { worker } = require("./mocks/browser");
  await worker.start();
};

const startDecorator = async () => {
  await injectDecoratorClientSide({
    env: "dev",
  });
};

if (process.env.NODE_ENV === "development") {
  startMockWorker();
  startDecorator();
}

if (window.env.ENVIRONMENT === "production") {
  initializeSentry();
}

initializeAmplitude();

ReactDOM.render(
  <Providers>
    <Authentication>
      <App />
    </Authentication>
  </Providers>,
  document.getElementById("mine-saker")
);

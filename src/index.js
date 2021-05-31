import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./providers/Providers";
import Authentication from "./components/authentication/Authentication";
import "./index.less";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <Providers>
    <Authentication>
      <App />
    </Authentication>
  </Providers>,
  document.getElementById("mine-saker")
);

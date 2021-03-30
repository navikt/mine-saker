import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./providers/Providers";
import "./index.less";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("mine-saker")
);

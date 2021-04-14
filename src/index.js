import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./providers/Providers";
import "./index.less";
import Authenticate from "./components/authenticate/Authenticate";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <Providers>
    <Authenticate>
      <App />
    </Authenticate>
  </Providers>,
  document.getElementById("mine-saker")
);

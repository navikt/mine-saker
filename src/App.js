import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "react-query";
import fetchData from "./api";
import ScrollToTop from "./components/scroll/ScrollToTop";
import MineSaker from "./pages/minesaker/MineSaker";
import { sakstemaerUrl } from "./urls";

const App = () => {
  useQuery(sakstemaerUrl, fetchData);

  return (
    <div className="mine-saker">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={MineSaker} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

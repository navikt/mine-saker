import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import MineSaker from "./pages/minesaker/MineSaker";
import Sakstema from "./pages/sakstema/Sakstema";
import { useQueries, useQuery } from "react-query";
import fetchData, { fetchBySakstemaKode } from "./api";
import { sakstemaerUrl } from "./urls";
import "./App.less";

const App = () => {
  const { data } = useQuery(sakstemaerUrl, fetchData);
  const sakstemaer = Array.isArray(data) ? data : [];

  useQueries(
    sakstemaer.map((sakstema) => {
      return {
        queryKey: ["sakstemakode", sakstema.kode],
        queryFn: () => fetchBySakstemaKode(sakstema.kode),
        onError: () => console.log(sakstema.kode),
      };
    })
  );

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/person/mine-saker" exact component={MineSaker} />
          <Route path="/person/mine-saker/tema/:temakode" component={Sakstema} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

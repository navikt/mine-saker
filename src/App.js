import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import MineSaker from "./pages/minesaker/MineSaker";
import Sakstema from "./pages/sakstema/Sakstema";

const App = () => {
  return (
    <div className="mine-saker">
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

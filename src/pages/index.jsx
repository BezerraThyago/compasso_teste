import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmptySearch from "./EmptySearch";
import Home from "./Home";
import User from "./User";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:userAccount">
          <User />
        </Route>
        <Route path="/empty-search/not-find" t>
          <EmptySearch />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;

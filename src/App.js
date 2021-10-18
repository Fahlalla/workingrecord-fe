import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Individual from "./page/Individual";

import History from "./page/History";
import Profile from "./page/Profile";
import Issue from "./page/Issue";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Individual />
        </Route>
        <Route exact path="/individual">
          <Individual />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/issue-problem">
          <Issue />
        </Route>
      </Switch>
    </Router>
  );
}

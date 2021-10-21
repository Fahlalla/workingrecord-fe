import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home";

import Profile from "./page/Profile";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/individual">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

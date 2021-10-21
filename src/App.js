import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import SummaryPayment from "./page/SummaryPayment";
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
        <Route exact path="/history">
          <Home />
        </Route>
        <Route exact path="/summary-payment">
          <SummaryPayment />
        </Route>
      </Switch>
    </Router>
  );
}

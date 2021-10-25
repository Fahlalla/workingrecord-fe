import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageWithMenubar from "./page/PageWithMenubar";

export default function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Router>
          <Switch>
            <Route path="/" component={PageWithMenubar} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

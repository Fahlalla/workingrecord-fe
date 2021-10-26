import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../routes";
import Menubar from "../Component/Menubar";
import Home from "./Home";

const PageWithMenubar = () => {
  const routesComponents = routes.map((route, index) => {
    return (
      <Route exact path={route.path} component={route.component} key={index} />
    );
  });
  return (
    <React.Fragment>
      <div className="flex h-full w-full">
        <Router>
          <Menubar />
          <Switch>
            {routesComponents}
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default PageWithMenubar;

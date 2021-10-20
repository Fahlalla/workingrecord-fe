import Home from "./page/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/individual" />
        </Route>
        <Route exact path="/individual" component={Home} />
        <Route exact path="/history" component={Home} />
        <Route exact path="/profile" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

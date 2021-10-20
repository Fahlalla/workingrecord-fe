import Home from "./page/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Summary from "./Component/Summary";

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
        <Route exact path="/summary" component={Summary} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

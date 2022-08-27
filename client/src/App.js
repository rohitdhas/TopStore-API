import "./styles/App.css";
import Nav from "./Components/nav";
import Home from "./Components/home";
import Docs from "./Components/docs";
import PageNotFound from "./Components/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/docs">
          <Docs />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

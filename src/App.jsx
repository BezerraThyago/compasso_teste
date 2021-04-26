import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Erro404 from "./pages/Erro404/Erro404";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:userAccount">
          <User />
        </Route>
        <Route exac path="/404"t>
          <Erro404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

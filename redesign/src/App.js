import "./styles.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Sale from "./components/Sale";
import Collections from "./components/Collections";
import Artists from "./components/Artists";
import AllTees from "./components/AllTees";
import Account from "./components/Account";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sale">
          <Sale />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route exact path="/collections/all-tees">
          <AllTees />
        </Route>
        <Route path="/account/login">
          <Account />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

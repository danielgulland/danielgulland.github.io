import "./styles.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DailyDeals from "./components/DailyDeals";
import Collections from "./components/Collections";
import Artists from "./components/Artists";
import LastChanceTees from "./components/LastChanceTees";
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
        <Route path="/daily_deals">
          <DailyDeals />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route exact path="/collections/last-chance-tees">
          <LastChanceTees />
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

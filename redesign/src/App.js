import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./styles.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Sale from "./components/Sale";
import Collections from "./components/Collections";
import Artists from "./components/Artists";
import AllTees from "./components/AllTees";
import Account from "./components/accounts/Account";
import Cart from "./components/checkout/Cart";
import TeeDetails from "./components/TeeDetails";
import CollectionDetails from "./components/CollectionDetails";
import Footer from "./components/Footer";
import Login from './components/accounts/Login';

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
        <Route exact path="/all-tees">
          <AllTees />
        </Route>
        <Route path="/account/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/tee/details">
          <TeeDetails />
        </Route>
        <Route path="/collection/details">
          <CollectionDetails />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

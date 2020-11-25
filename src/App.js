import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Backoffice from "./components/Backoffice";
function App() {
  return (
    <Router>
      <AppNavBar />
      <Route
        path={"/"}
        exact
        render={(props) => <Home title="Homepage" {...props} />}
      />
      <Route
        path={"/backoffice"}
        render={(props) => <Backoffice {...props} />}
      />
      <Route path={"/cart"} render={(props) => <Cart {...props} />} />
    </Router>
  );
}

export default App;

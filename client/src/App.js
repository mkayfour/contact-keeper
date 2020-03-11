import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navabar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Fragment>
        <Navabar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

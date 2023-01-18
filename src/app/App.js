import React from "react";

import Header from '../components/ui/Header';
import Home from '../components/Home';
import About from '../components/About';
import Berries from '../components/Berries';
import Pokemon from '../components/Pokemon';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/berries">
          <Berries />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

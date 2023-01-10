import React from "react";

import Header from '../components/ui/Header';
import About from '../components/About';
import Berries from '../components/Berries';
import Pokemon from '../components/Pokemon';

import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/berries">
          <Berries />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
      </main>
    </Router>
  );
}

export default App;

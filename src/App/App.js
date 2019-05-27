import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Ask from '../Ask/Ask';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/Ask" component={Ask} />
        <Route path="/Contact" component={Contact} />

      </Router>
    </div>
  );
}

export default App;

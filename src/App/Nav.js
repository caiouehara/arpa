import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="menu">
        <Link to="/"><p>Home</p></Link>
        <Link to="/Ask"><p>Ask</p></Link>
      </div>
    </div>
  );
}

export default Nav;

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom/es";
import asyncComponent from "./asyncComponent";

const App = () => (
  <Router basename="some_dir">
    <div>
      <h2>Webpack Async Code Splitting</h2>
      <h3>Please choose an option</h3>
      <ul>
        <li><Link to="/home">Home</Link></li>
      </ul>
      <Route path="/home" component={asyncComponent(() => import(/* webpackChunkName: "home" */ "./Home"))} />
    </div>
  </Router>
);

export default App;
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom/es";

const App = ({ routes }) => (
  <Router basename="some_dir">
    <div>
      <h2>Webpack Async Code Splitting</h2>
      <h3>Please choose an option</h3>
      <ul>
        <li><Link to="/home">Home</Link></li>
      </ul>
      {routes}
    </div>
  </Router>
);

export default App;
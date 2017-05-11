import React from "react";
import { Link, Route } from "react-router-dom/es";

const Home = ({ match }) => (
  <div>
    <p>
      Welcome to the home page!
    </p>
    <ul>
      <li><Link to={`${match.url}/more`}>More</Link></li>
    </ul>
    <Route path={`${match.url}/more`} render={() => <p>More content</p>} />
  </div>
);

export default Home;
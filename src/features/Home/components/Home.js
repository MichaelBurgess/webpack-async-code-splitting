import React from "react";
import { Link, Route } from "react-router-dom/es";

const Home = ({ match, messageBoxValue, message, onMessageChange, onClickSetMessage }) => (
  <div>
    <p>
      Welcome to the home page!
    </p>
    <ul>
      <li><Link to={`${match.url}/more`}>More</Link></li>
    </ul>
    <input type="text" value={messageBoxValue} onChange={e => onMessageChange(e.target.value)} />
    <button onClick={onClickSetMessage}>Set Message</button>
    <p>
      {message}
    </p>
    <Route path={`${match.url}/more`} render={() => <p>More content</p>} />
  </div>
);

export default Home;
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";

import configureRoutes from "./configureRoutes";
import configureStore from "./configureStore";
import coreReducers from "./reducers/core";
import ReducerRegistry from "./ReducerRegistry";

const reducerRegistry = new ReducerRegistry(coreReducers);

const routes = configureRoutes(reducerRegistry);
const store = configureStore(reducerRegistry);

ReactDOM.render(
  <Provider store={store}>
    <App routes={routes} />
  </Provider>,
  document.getElementById("react-container"));
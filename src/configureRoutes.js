import React from "react";
import { Route, Switch } from "react-router-dom/es";
import asyncComponent from "./asyncComponent";

const configureRoutes = reducerRegistry => {
  return (
    <Switch>
      <Route path="/home" component={asyncComponent(
        () => import(/* webpackChunkName: "home" */ "./features/Home/reducers"),
        () => import(/* webpackChunkName: "home" */ "./features/Home"),
        reducerRegistry
      )} />
    </Switch>
  );
};

export default configureRoutes;
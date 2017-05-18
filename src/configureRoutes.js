import React from "react";
import { Route, Switch } from "react-router-dom/es";
import asyncRoute from "./asyncRoute";

const configureRoutes = reducerRegistry => {
  return (
    <Switch>
      <Route path="/home" component={asyncRoute(
        () => import(/* webpackChunkName: "home" */ "./features/Home/reducers"),
        () => import(/* webpackChunkName: "home" */ "./features/Home"),
        reducerRegistry
      )} />
    </Switch>
  );
};

export default configureRoutes;
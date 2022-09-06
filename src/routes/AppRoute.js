import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import { AdminRoute } from "./AdminRoute";
import { HomeRoute } from "./HomeRoute";

export const AppRoute = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            component={Login}
            path="/login"
          />

          <Route
            component={AdminRoute}
            path="/admin"
          />

          <Route
            component={HomeRoute}
            path="/"
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

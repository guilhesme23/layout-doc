import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../components/home'
import Test from '../teste'

export default () => (
  <BrowserRouter basename="/layout-doc">
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/test" exact component={Test} />
    </Switch>
  </BrowserRouter>
);

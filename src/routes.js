import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import How from "./containers/How";

import HomepageLayout from "./containers/Home";

const BaseRouter = () => (
  <Hoc>
    <Route path="/how-to" component={How} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);
export default BaseRouter;

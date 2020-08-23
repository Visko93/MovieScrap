import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Film from "../Pages/Film";
import Edit from "../Pages/Edit";
import NotFound from "../Pages/NotFound";





function Routes () {
  return (
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/film' component={Film} />
        <Route path='/edit' component={Edit} />
        <Route component={NotFound} />
      </Switch>
  )
}

export default Routes
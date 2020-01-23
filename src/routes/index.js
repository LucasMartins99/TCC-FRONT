import React from "react";

import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login/index";
import CreateUser from "../pages/CreateUser/index";
import Main from "../pages/Main/index";
import CreateEvent from "../pages/Evento/Create/index";
import UpdateEvent from "../pages/Evento/Update/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={CreateUser} isPrivate />
      <Route path="/main" component={Main} isPrivate />
      <Route path="/create-event" component={CreateEvent} isPrivate />
      <Route path="/update-event" component={UpdateEvent} isPrivate />
    </Switch>
  );
}

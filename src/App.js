import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyles from "@styles/GlobalStyles";
import Login from "@components/login/Login";
import Users from "@components/users/Users";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

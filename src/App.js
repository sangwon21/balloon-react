import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLanguage } from "@modules/language";
import { STORAGE_KEYS } from "@constants/constant";

import GlobalStyles from "@styles/GlobalStyles";
import Login from "@components/login/Login";
import Users from "@components/users/Users";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const settingLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (settingLanguage) dispatch(setLanguage(settingLanguage));
  }, []);

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

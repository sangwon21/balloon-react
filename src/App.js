import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLanguage } from "@modules/language";
import { STORAGE_KEYS, LANGUAGES } from "@constants/constant";

import koData from "@data/languages/ko.json";
import jaData from "@data/languages/ja.json";

import GlobalStyles from "@styles/GlobalStyles";
import Login from "@components/login/Login";
import Users from "@components/users/Users";

const App = () => {
  const dispatch = useDispatch();

  const langDatas = {};
  langDatas[LANGUAGES.KO] = koData;
  langDatas[LANGUAGES.JA] = jaData;

  useEffect(() => {
    const settingLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (settingLanguage) dispatch(setLanguage(settingLanguage, langDatas[settingLanguage]));
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

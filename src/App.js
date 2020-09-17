import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@modules/language";
import { STORAGE_KEYS, LANGUAGES } from "@constants/constant";

import koData from "@data/languages/ko.json";
import jaData from "@data/languages/ja.json";

import GlobalStyles from "@styles/GlobalStyles";
import Header from "@components/menus/header/Header";
import Footer from "@components/menus/footer/Footer";
import Toast from "@components/common/toast/Toast";
import Login from "@components/pages/login/Login";
import Users from "@components/pages/users/Users";
import Congrats from "@components/pages/congrats/Congrats";
import Box from "@components/pages/box/Box";
import Stats from "@components/pages/stats/Stats";
import Guide from "@components/pages/guide/Guide";

const App = () => {
  const dispatch = useDispatch();
  const {
    page: { currentPage },
    toast: { isShow },
  } = useSelector((index) => index);

  const langDatas = {};
  langDatas[LANGUAGES.KO] = koData;
  langDatas[LANGUAGES.JA] = jaData;

  useEffect(() => {
    const settingLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (settingLanguage) dispatch(setLanguage(settingLanguage, langDatas[settingLanguage]));
  }, []);

  return (
    <Router>
      <GlobalStyles />
      {currentPage !== "/" && (
        <>
          <Header />
          <Footer />
        </>
      )}
      {isShow && <Toast />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/congrats" component={Congrats} />
        <Route path="/box" component={Box} />
        <Route path="/stats" component={Stats} />
        <Route path="/guide" component={Guide} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

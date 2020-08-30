import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@modules/language";
import { STORAGE_KEYS, LANGUAGES } from "@constants/constant";

import koData from "@data/languages/ko.json";
import jaData from "@data/languages/ja.json";

import GlobalStyles from "@styles/GlobalStyles";
import Header from "@components/menus/header/Header";
import Footer from "@components/menus/footer/Footer";
import Login from "@components/pages/login/Login";
import Users from "@components/pages/users/Users";
import Congrats from "@components/pages/congrats/Congrats";
import box from "@components/pages/box/Box";
import Stats from "@components/pages/stats/Stats";
import Guide from "@components/pages/guide/Guide";

const App = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(({ page }) => page);

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
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/congrats" component={Congrats} />
        <Route path="/box" component={box} />
        <Route path="/stats" component={Stats} />
        <Route path="/guide" component={Guide} />
      </Switch>
    </Router>
  );
};

export default App;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin, getUserData } from "@modules/login";
import { STORAGE_KEYS } from "@constants/constant";

const Session = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    login: { userData },
  } = useSelector((index) => index);

  useEffect(() => {
    // 로그인 세션
    const prevSessionData = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION));
    if (!prevSessionData) return history.replace("/");
    if (!userData) dispatch(getUserData(prevSessionData.profileObj.email));

    const sessionUpdate = async () => {
      const sessionData = await dispatch(userLogin(prevSessionData));
      sessionStorage.setItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION, JSON.stringify(sessionData));
    };
    sessionUpdate();
  }, []);

  return <input type="hidden" />;
};

export default Session;

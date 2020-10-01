import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserData, userLogout } from "@modules/login";
import { checkSession } from "@utils/request";
import { STORAGE_KEYS } from "@constants/constant";

const Session = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    language: { langData },
    login: { userData },
  } = useSelector((index) => index);

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION));
    if (!sessionData) return history.replace("/");
    if (!userData) dispatch(getUserData(sessionData));

    // 유효한 로그인 세션인지 체크
    const check = async () => {
      const isValid = await checkSession();
      if (isValid) return;

      // 유효하지 않은 세션 - 로그아웃 처리
      alert(langData["T0005"]);
      dispatch(userLogout());
      history.push("/");
      window.location.reload();
    };
    check();
  }, []);

  return <input type="hidden" />;
};

export default Session;

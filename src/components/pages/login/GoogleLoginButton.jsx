import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import { getUserData, initUserPicture } from "@modules/login";
import { login, updateUserPicture } from "@utils/request";
import { STORAGE_KEYS } from "@constants/constant";

const GoogleLoginButtonWrap = styled.div`
  box-sizing: border-box;
`;

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    language: { langData },
  } = useSelector((index) => index);

  const responseGoogle = async ({ profileObj }) => {
    const { email, imageUrl } = profileObj;

    // 유효한 메일 host인지 체크
    if (!email.includes(process.env.REACT_APP_VAILD_MAIL_DOMAIN) && !(email === process.env.REACT_APP_TEST_ACCOUNT)) return alert(langData["L0005"]);

    // Set Sesstion Storage
    const sessionData = await login(profileObj);
    if (!sessionData.token) return alert(langData["T0002"]);
    sessionStorage.setItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION, JSON.stringify(sessionData));

    // Set User Picture
    const { message, picture } = await dispatch(getUserData(profileObj));
    if (!picture) dispatch(initUserPicture(imageUrl));
    if (imageUrl !== picture) await updateUserPicture(email, imageUrl);

    // 조회 된 유저 정보 없음
    if (message !== "404" && message !== "500") return history.push("/users");
    return alert(langData["T0002"]);
  };

  const buttonText = langData["L0004"];

  return (
    <GoogleLoginButtonWrap>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        buttonText={buttonText}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </GoogleLoginButtonWrap>
  );
};

export default GoogleLoginButton;

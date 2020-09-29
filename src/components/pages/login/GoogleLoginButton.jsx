import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import { userLogin, getUserData } from "@modules/login";
import { updateUserPicture } from "@utils/util";
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

    if (!email.includes(process.env.REACT_APP_VAILD_MAIL_DOMAIN) && !(email === process.env.REACT_APP_TEST_ACCOUNT)) return alert(langData["L0005"]);

    const loginData = { profileObj };
    const sessionData = await dispatch(userLogin(loginData));
    sessionStorage.setItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION, JSON.stringify(sessionData));

    const { message, picture } = await dispatch(getUserData(email));
    if (imageUrl !== picture) await updateUserPicture(email, imageUrl);

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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import { userLogin } from "@modules/login";
import { STORAGE_KEYS } from "@constants/constant";

const GoogleLoginButtonWrap = styled.div`
  box-sizing: border-box;
`;

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { langData } = useSelector(({ language }) => language);

  const responseGoogle = ({ profileObj, tokenObj }) => {
    const { email } = profileObj;
    if (!email.endsWith("@rsupport.com")) return alert(langData["L0005"]);

    const loginData = { profileObj, tokenObj };
    dispatch(userLogin(loginData));
    sessionStorage.setItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION, JSON.stringify(loginData));

    return history.push("/users");
  };

  const buttonText = langData["L0004"];

  return (
    <GoogleLoginButtonWrap>
      <GoogleLogin clientId={process.env.REACT_APP_OAUTH_CLIENT_ID} buttonText={buttonText} onSuccess={responseGoogle} onFailure={responseGoogle} />
    </GoogleLoginButtonWrap>
  );
};

export default GoogleLoginButton;

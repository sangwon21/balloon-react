import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButtonWrap = styled.div`
  box-sizing: border-box;
`;

const GoogleLoginButton = () => {
  const history = useHistory();
  const { language } = useSelector(({ language }) => language);

  const responseGoogle = (response) => {
    const { email } = response.profileObj;

    if (!email.endsWith("@rsupport.com")) return alert("등록된 회사 이메일로만 로그인 가능합니다.");
    return history.push("/users");
  };

  const texts = {
    ko: "Google 이메일로 로그인하기",
    ja: "Gメールでログインする",
  };

  const buttonText = texts[language];

  return (
    <GoogleLoginButtonWrap>
      <GoogleLogin
        clientId="281154283163-bsa8jkvn8jh1vnf5kklv153cmtko7bc8.apps.googleusercontent.com"
        buttonText={buttonText}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </GoogleLoginButtonWrap>
  );
};

export default GoogleLoginButton;

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
  const { langData } = useSelector(({ language }) => language);

  const responseGoogle = (response) => {
    const { email } = response.profileObj;

    if (!email.endsWith("@rsupport.com")) return alert(langData["L0005"]);
    return history.push("/users");
  };

  const buttonText = langData["L0004"];

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

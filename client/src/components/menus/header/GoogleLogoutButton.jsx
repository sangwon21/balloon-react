import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { userLogout } from "@modules/login";

const GoogleLogoutButton = ({ text }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    window.location.href = "/";
  };

  return (
    <GoogleLogout
      icon={false}
      render={({ onClick }) => <span onClick={onClick}>{text}</span>}
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
      onLogoutSuccess={logout}
      // onLogoutFailure={logout}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogoutButton;

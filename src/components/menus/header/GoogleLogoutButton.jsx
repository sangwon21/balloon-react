import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { userLogout } from "@modules/login";

const GoogleLogoutButton = ({ text }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(userLogout());
    history.push("/");
    window.location.reload();
  };

  return (
    <GoogleLogout
      icon={false}
      render={({ onClick }) => <span onClick={onClick}>{text}</span>}
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
      onLogoutSuccess={logout}
      onLogoutFailure={logout}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogoutButton;

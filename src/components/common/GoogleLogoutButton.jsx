import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { STORAGE_KEYS } from "@constants/constant";

const GoogleLogoutButton = () => {
  const history = useHistory();

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION);
    history.push("/");
  };

  return <GoogleLogout lientId={process.env.REACT_APP_OAUTH_CLIENT_ID} buttonText="Logout" onLogoutSuccess={logout} />;
};

export default GoogleLogoutButton;

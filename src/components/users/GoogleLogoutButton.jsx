import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const GoogleLogoutButton = () => {
  const history = useHistory();

  const logout = (response) => {
    console.log(response);

    history.push("/");
  };

  return <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />;
};

export default GoogleLogoutButton;

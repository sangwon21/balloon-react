import React from "react";
import styled from "styled-components";

import GoogleLogoutButton from "./GoogleLogoutButton";
import Footer from "./Footer";

const UsersWrap = styled.div`
  position: relative;
`;

const Users = () => {
  return (
    <UsersWrap>
      <GoogleLogoutButton />
      <Footer />
    </UsersWrap>
  );
};

export default Users;

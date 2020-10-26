import React from "react";
import styled from "styled-components";

const UserListSkeletonWrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 20px;
  background-image: linear-gradient(#eee 20px, transparent 0), linear-gradient(#eee 20px, transparent 0), linear-gradient(#eee 180px, transparent 0),
    linear-gradient(#eee 180px, transparent 0), linear-gradient(#eee 180px, transparent 0), linear-gradient(#eee 180px, transparent 0),
    linear-gradient(#eee 180px, transparent 0), linear-gradient(#eee 180px, transparent 0), linear-gradient(#eee 180px, transparent 0);
  background-repeat: repeat-y;
  background-size: 75px 280px, 175px 280px, 150px 280px, 150px 280px, 150px 280px, 150px 280px, 150px 280px, 150px 280px, 150px 280px;
  background-position: 0 0, 0 30px, 0 60px, 160px 60px, 320px 60px, 480px 60px, 640px 60px, 800px 60px, 960px 60px;
`;

const UserListSkeleton = () => {
  return <UserListSkeletonWrap />;
};

export default UserListSkeleton;

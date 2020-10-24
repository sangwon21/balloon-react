import React from "react";
import styled from "styled-components";
import { teamNameLangData } from "@data/languages/part-team-name";
import { LANGUAGES } from "@constants/constant";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import noPicture from "@assets/images/no-picture.png";

const UserInfoModalBodyWrap = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
  img {
    width: 140px;
    height: 140px;
    border: 1px solid #e6e6e6;
    background-color: #eee;
    border-radius: 50%;
    box-sizing: border-box;
    margin-right: 30px;
  }
  .icon {
    color: ${({ theme }) => theme.backgroundColor.point};
    font-size: 18px;
    margin-right: 15px;
  }
`;

const Name = styled.p`
  font-size: 19px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
`;

const ContactNumber = styled.div`
  display: flex;
  .tel {
    margin-bottom: 8px;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #474747;
  }
  .icon {
    font-size: 22px;
    margin-right: 11px;
  }
`;

const Divider = styled.div`
  width: 255px;
  margin: 15px 0;
  border-top: 1px dotted ${({ theme }) => theme.backgroundColor.sub};
`;

const UserInfoModalBody = ({ language, receiver }) => {
  const name = language === LANGUAGES.KO ? receiver.name : receiver.englishName ? receiver.englishName : receiver.name;
  const team = language === LANGUAGES.KO ? receiver.team : teamNameLangData[receiver.team][language];
  const handleImgError = ({ target }) => {
    target.onerror = null;
    target.src = noPicture;
  };

  return (
    <UserInfoModalBodyWrap>
      <img src={receiver.picture || noPicture} alt="user img" referrerPolicy="no-referrer" onError={handleImgError} />
      <div>
        <Name>{name}</Name>
        {receiver.leaderPart ? <p>{receiver.leaderPart}</p> : <p>{team}</p>}
        <Divider />
        <ContactNumber>
          <FaPhoneAlt className="icon" />
          <div>
            <p className="tel">{receiver.tel}</p>
            <p className="phone">{receiver.phone}</p>
          </div>
        </ContactNumber>
        <Divider />
        <Email>
          <HiOutlineMail className="icon" />
          <a href={`mailto:${receiver.email}`}>{receiver.email}</a>
        </Email>
      </div>
    </UserInfoModalBodyWrap>
  );
};

export default UserInfoModalBody;

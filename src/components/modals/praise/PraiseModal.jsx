import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

const PraiseModalBackground = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000030;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PraiseModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 490px;
  min-height: 300px;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.33);
  font-size: 18px;
  border: 3px solid #999;
  border-radius: 6px;
  color: #474747;
  z-index: 25;
`;

const Header = styled.div`
  padding: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
  .close-icon {
    font-size: 14px;
    cursor: pointer;
    color: #ccc;
    :hover {
      color: #555;
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  bottom: 0;
  border-top: 1px solid #eee;
  background-color: #f6f6f6;
  border-radius: 0 0 3px 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PraiseModal = ({ setOpen }) => {
  const {
    language: { langData },
    message: { name, englishName, email, picture },
  } = useSelector((index) => index);

  const handleModalClose = () => setOpen(false);

  return (
    <>
      <PraiseModalBackground onClick={handleModalClose} />
      <PraiseModalWrap>
        <Header>
          <h3>{langData["L0022"]}</h3>
          <ImCross className="close-icon" onClick={handleModalClose} />
        </Header>
        <Footer>
          <button type="submit">{langData["L0027"]}</button>
          <button type="button" onClick={handleModalClose}>
            {langData["L0028"]}
          </button>
        </Footer>
      </PraiseModalWrap>
    </>
  );
};

export default PraiseModal;

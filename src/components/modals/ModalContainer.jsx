import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

const ModalBackground = styled.div`
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
  &.show {
    animation-name: show-modal-background;
    animation-duration: 0.25s;
    animation-fill-mode: both;
  }
  @keyframes show-modal-background {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalContainerForm = styled.form`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 490px;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.33);
  font-size: 18px;
  border: 3px solid #999;
  border-radius: 6px;
  color: #474747;
  z-index: 25;
  &.show {
    animation-name: show-praise-modal;
    animation-duration: 0.25s;
    animation-fill-mode: both;
  }
  @keyframes show-praise-modal {
    0% {
      opacity: 0;
      top: 40%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }
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
  button {
    padding: 5px 20px;
    color: #fff;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    border: none;
    outline: none;
    border-radius: 2px;
    cursor: pointer;
  }
  .send-btn {
    background-color: #00a6de;
    margin-right: 10px;
    :hover {
      background-color: #0090c0;
    }
  }
  .close-btn {
    background-color: #ccc;
  }
`;

const ModalContainer = ({ isOpen, body, handleSubmit, handleModalClose, onSubmit, modalTitleText, submitBtnText, closeBtnText }) => {
  const className = isOpen ? "show" : "";

  return (
    <>
      <ModalBackground onClick={handleModalClose} className={className} />
      <ModalContainerForm onSubmit={handleSubmit(onSubmit)} className={className}>
        <Header>
          <h3>{modalTitleText}</h3>
          <ImCross className="close-icon" onClick={handleModalClose} />
        </Header>
        {body}
        <Footer>
          <button type="submit" className="send-btn">
            {submitBtnText}
          </button>
          <button type="button" className="close-btn" onClick={handleModalClose}>
            {closeBtnText}
          </button>
        </Footer>
      </ModalContainerForm>
    </>
  );
};

export default ModalContainer;

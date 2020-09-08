import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { LANGUAGES } from "@constants/constant";

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

const PraiseModalForm = styled.form`
  position: fixed;
  top: 50%;
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

const Body = styled.div`
  padding: 9px;
  display: flex;
  flex-direction: column;
  .receiver-name {
    font-size: 14px;
  }
  .message-area {
    resize: vertical;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    margin: 20px 0 15px 0;
    color: #252525;
  }
  .secret-checkbox {
    align-self: baseline;
    padding: 3px 8px;
    border-radius: 3px;
    background: #eee;
    font-size: 14px;
    font-weight: 600;
    height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    input {
      margin: 0 6px 0 0;
    }
  }
  .caution-text {
    color: #f00;
    font-size: 13px;
    font-weight: 600;
    line-height: 40px;
    margin-left: 15px;
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

const PraiseModal = ({ setOpen }) => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const {
    language: { langData, language },
    receiver: { name, englishName },
  } = useSelector((index) => index);

  const handleModalClose = () => {
    if (message === "") return setOpen(false);
    if (window.confirm(langData["T0001"])) return setOpen(false);
  };
  const handleChange = ({ target: { value } }) => setMessage(value);

  const onSubmit = (data) => console.log(data);

  const receiverName = language === LANGUAGES.KO ? name : englishName ? englishName : name;

  return (
    <>
      <PraiseModalBackground onClick={handleModalClose} />
      <PraiseModalForm onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <h3>{langData["L0022"]}</h3>
          <ImCross className="close-icon" onClick={handleModalClose} />
        </Header>
        <Body>
          <span className="receiver-name">To. {receiverName}</span>
          <textarea
            ref={register}
            name="message"
            className="message-area"
            rows="6"
            placeholder={langData["L0024"]}
            maxLength={500}
            onChange={handleChange}
          />
          <label className="secret-checkbox">
            <input type="checkbox" name="isSecret" ref={register} />
            <p>{langData["L0025"]}</p>
          </label>
          <p className="caution-text">※ {langData["L0026"]}</p>
        </Body>
        <Footer>
          <button type="submit" className="send-btn">
            {langData["L0027"]}
          </button>
          <button type="button" className="close-btn" onClick={handleModalClose}>
            {langData["L0028"]}
          </button>
        </Footer>
      </PraiseModalForm>
    </>
  );
};

export default PraiseModal;

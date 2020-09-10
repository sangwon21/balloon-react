import React from "react";
import styled from "styled-components";

const PraiseModalBodyWrap = styled.div`
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

const PraiseModalBody = ({ receiverName, register, langData, handleChange }) => {
  return (
    <PraiseModalBodyWrap>
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
    </PraiseModalBodyWrap>
  );
};

export default PraiseModalBody;

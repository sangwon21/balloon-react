import React from "react";
import styled from "styled-components";

const EnvelopeWrap = styled.div`
  position: absolute;
  left: 50%;
  top: -90px;
  display: inline-block;
  margin: 0 auto;
  margin-left: -49px;
  margin-bottom: -33px;
  width: 98px;
  height: 66px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 1px #c94548 inset;
  background: #c94548;
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 33px 49px;
  }
  ::before {
    top: -100%;
    left: 0px;
    border-bottom-color: #c94548;
  }
  ::after {
    top: 0;
    border-radius: 0 0 5px 5px;
    border-right-color: #ed4c50;
    border-left-color: #fa565a;
    border-bottom-color: #fa565a;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    transform: rotate(360deg);
  }
`;

const Paper = styled.div`
  position: absolute;
  left: 6px;
  top: -33px;
  margin: 0 auto;
  width: 87px;
  height: 66px;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  background: #fff;
  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 12px;
    height: 4px;
    border-radius: 5px;
    background: #e3f1fc;
  }
  ::before {
    top: 14px;
    width: 31px;
  }
  ::after {
    right: 12px;
    top: 28px;
    box-shadow: 0 8px 0 #e3f1fc, 0 16px 0 #e3f1fc, 0 24px 0 #e3f1fc, 0 40px 0 #e3f1fc;
  }
`;

const Envelope = () => {
  return (
    <EnvelopeWrap>
      <Paper />
    </EnvelopeWrap>
  );
};

export default Envelope;

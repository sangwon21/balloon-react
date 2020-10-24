import React from "react";
import { useSelector } from "react-redux";
import { BalloonListWrap } from "@styles/CommonStyles";
import moment from "moment";
import styled from "styled-components";

const Panel = styled.div`
  width: 100%;
  height: 120px;
  border: 4px dashed;
  border-color: ${({ theme }) => `rgba(${theme.backgroundColor.mainRGB}, 0.4)`};
  background: #f5f5f5;
  color: ${({ theme }) => `rgba(${theme.backgroundColor.mainRGB}, 0.8)`};
  font-size: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    line-height: 30px;
  }
  b {
    font-weight: 600;
  }
`;

const ReceiveBalloonList = () => {
  const { langData } = useSelector(({ language }) => language);
  const TEST_COUNT = 0;

  const thisMonth = moment().month() + 1;
  const nextMonth = thisMonth + 1 >= 13 ? 1 : thisMonth + 1;

  const createMarkup = () => {
    return { __html: langData["L0052"].replace("{{thisMonth}}", thisMonth).replace("{{nextMonth}}", nextMonth) };
  };

  return (
    <BalloonListWrap>
      <h3 className="balloon-list-title">
        {langData["L0050"]} {langData["L0051"].replace("%s", TEST_COUNT)}
      </h3>
      <div className="balloon-list-content">
        <Panel>
          <p dangerouslySetInnerHTML={createMarkup()} />
        </Panel>
      </div>
    </BalloonListWrap>
  );
};

export default ReceiveBalloonList;

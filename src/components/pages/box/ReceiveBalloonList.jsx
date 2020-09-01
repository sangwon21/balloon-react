import React from "react";
import { useSelector } from "react-redux";
import { BalloonListWrap } from "@styles/CommonStyles";

const ReceiveBalloonList = () => {
  const { langData } = useSelector(({ language }) => language);
  const TEST_COUNT = 1;

  return (
    <BalloonListWrap>
      <h3 className="balloon-list-title">
        {langData["L0050"]} {langData["L0051"].replace("%s", TEST_COUNT)}
      </h3>
      <div className="balloon-list-content"></div>
    </BalloonListWrap>
  );
};

export default ReceiveBalloonList;

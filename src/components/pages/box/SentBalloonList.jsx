import React from "react";
import { useSelector } from "react-redux";
import { BalloonListWrap } from "@styles/CommonStyles";

const SentBalloonList = () => {
  const { langData } = useSelector(({ language }) => language);
  const TEST_COUNT = 3;

  return (
    <BalloonListWrap>
      <h3 className="balloon-list-title">
        {langData["L0054"]} {langData["L0051"].replace("%s", TEST_COUNT)}
      </h3>
      <div className="balloon-list-content"></div>
    </BalloonListWrap>
  );
};

export default SentBalloonList;

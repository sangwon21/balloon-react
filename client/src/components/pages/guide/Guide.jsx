import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";
import { Helmet } from "react-helmet";

import contSpecialHoliday from "@assets/images/cont-special-holiday.png";

import ContentWrapper from "@components/common/wrapper/ContentWrap";

const GuideWrap = styled.div`
  padding: 25px 24px;
  h3 {
    font-size: 24px;
    color: #444;
  }
  p,
  li {
    margin: 12px 0;
    font-size: 18px;
    color: #777;
  }
  b {
    font-weight: 600;
  }
  ol {
    list-style: decimal;
    list-style-position: inside;
    ul {
      margin-left: 20px;
    }
  }
  ul {
    list-style: disc;
    list-style-position: inside;
  }
`;

const Divider = styled.div`
  width: 40px;
  margin: 30px 0;
  border-top: 2px solid ${({ theme }) => theme.backgroundColor.sub};
`;

const VideoSection = styled.section`
  iframe {
    width: 640px;
    height: 360px;
  }
  p {
    margin-top: 15px;
  }
  margin-bottom: 80px;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const Guide = () => {
  const dispatch = useDispatch();
  const { language, langData } = useSelector(({ language }) => language);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return (
    <ContentWrapper title={langData["L0010"]}>
      <Helmet>
        <title>{`${langData["L0001"]} - ${langData["L0036"]}`}</title>
      </Helmet>
      <GuideWrap>
        <VideoSection>
          <h3>{langData["L0065"]}</h3>
          <Divider />
          <iframe src="https://www.youtube.com/embed/TTSbmLuTU98" frameBorder="0" allowFullScreen title="introduce video" />
          <p>{langData["L0066"]}</p>
        </VideoSection>
        <Section>
          <h3>{langData["L0067"]}</h3>
          <Divider />
          <ol>
            <li>{langData["L0068"]}</li>
            <li>{langData["L0069"]}</li>
            <li>{langData["L0070"]}</li>
            <li>{langData["L0071"]}</li>
            <li>{langData["L0072"]}</li>
            <li>{langData["L0073"]}</li>
            <li>{langData["L0074"]}</li>
          </ol>
        </Section>
        {language === LANGUAGES.KO && (
          <Section>
            <h3>칭찬왕 휴가 결재 방법</h3>
            <Divider />
            <img src={contSpecialHoliday} alt="cont special holyday img" />
            <ul className="m-t-20">
              <li>
                <b>결재선 : </b>휴가 결재선과 동일
              </li>
              <li>
                <b>사유 : </b>특별휴가 1일 (10월 칭찬왕 또는 칭찬쟁이) / 사유 기재
              </li>
              <li>
                <b>구분 : </b>[특별휴가] 선택
              </li>
              <li>
                <b>사용기한 : </b>특별휴가는 개인연차 소진 후 사용 가능
              </li>
            </ul>
          </Section>
        )}
        <Section>
          <h3>{langData["L0075"]}</h3>
          <Divider />
          <ol>
            <li>{langData["L0076"]}</li>
            <li>{langData["L0077"]}</li>
          </ol>
        </Section>
        <Section>
          <h3>{langData["L0078"]}</h3>
          <Divider />
          <ol>
            <li>{langData["L0079"]}</li>
            <li>{langData["L0080"]}</li>
          </ol>
        </Section>
        <Section>
          <h3>{langData["L0081"]}</h3>
          <Divider />
          <ol>
            <li>{langData["L0082"]}</li>
          </ol>
        </Section>
        <Section>
          <h3>{langData["L0084"]}</h3>
          <Divider />
          <p className="m-b-20">{langData["L0085"]}</p>
          <ol>
            <li>
              {langData["L0086"]}
              <ul>
                <li>{langData["L0083"]}</li>
                <li>{langData["L0087"]}</li>
                <li>{langData["L0088"]}</li>
              </ul>
            </li>
            <li className="m-t-30">
              {langData["L0089"]}
              <ul>
                <li>{langData["L0083"]}</li>
                <li>{langData["L0090"]}</li>
                <li>{langData["L0091"]}</li>
              </ul>
            </li>
          </ol>
        </Section>
      </GuideWrap>
    </ContentWrapper>
  );
};

export default Guide;

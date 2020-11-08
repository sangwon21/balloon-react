import React from "react";
import styled from "styled-components";
import useSetTimeout from "@hooks/useSetTimeout";

import balloonLetterRed from "@assets/images/balloon-letter-red.png";

const BalloonLetterWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  pointer-events: none;
  animation: balloonEffectAnim ${({ animDuration }) => `${animDuration}ms`} ease-in-out;
  animation-fill-mode: both;
  @keyframes balloonEffectAnim {
    0% {
      transform: translate(-50%, -65%) rotate(-5deg);
      opacity: 0;
    }
    25% {
      transform: translate(-50%, -85%) rotate(20deg);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -105%) rotate(-18deg);
      opacity: 1;
    }
    75% {
      transform: translate(-50%, -125%) rotate(17deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -145%) rotate(-19deg);
      opacity: 0;
    }
  }
`;

const BalloonLetter = ({ setShowSendEffect }) => {
  const ANIM_DURATION = 2750;

  useSetTimeout(() => {
    setShowSendEffect(false);
  }, ANIM_DURATION);

  return (
    <BalloonLetterWrap animDuration={ANIM_DURATION}>
      <img src={balloonLetterRed} alt="balloon img" />
    </BalloonLetterWrap>
  );
};

export default BalloonLetter;

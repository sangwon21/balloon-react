import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
      scroll-behavior: smooth;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    position: relative;
    background: rgba(241,241,241);
    .m-t-20 {
    margin-top: 20px;
    }
    .m-t-30 {
      margin-top: 30px;
    }
    .m-b-20 {
      margin-bottom: 20px;
    }
    .m-b-30 {
      margin-bottom: 30px;
    }
  }

  button, input {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;

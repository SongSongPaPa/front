import { createGlobalStyle } from "styled-components";
import bouncyThin from "@assets/fonts/Bouncy-Thin.otf";

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family:'bitbit';
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
}

body {
  font-family: 'bitbit';
  background-color: #BAE6FF;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;

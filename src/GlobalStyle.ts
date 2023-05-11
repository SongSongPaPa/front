import { createGlobalStyle } from "styled-components";
import bouncyThin from "@assets/fonts/Bouncy-Thin.otf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'ONE-Mobile-POP';
  src: url(${bouncyThin}) format('truetype');
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    unicode-range: U+AC00-D7A3, U+3131-314E, U+314F-3163, U+0030-0039;
}

body {
  font-family:'ONE-Mobile-POP'; 
  background-color: #BAE6FF;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;

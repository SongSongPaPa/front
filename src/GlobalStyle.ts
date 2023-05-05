import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Bouncy";
  src: url("@assets/fonts/Bouncy.otf")
}

@font-face {
  font-family: "ONE",
  src: url('@assets/fonts/ONE\ Mobile\ POP.otf')
}

body {
  font-family: Bouncy;
  background-color: #BAE6FF;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;

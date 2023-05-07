import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Bouncy";
  src: url("/src/assets/fonts/Bouncy.otf") format("truetype");
}

@font-face {
  font-family: "ONE",
  src: url('/src/assets/fonts/ONE\ Mobile\ POP.otf')
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

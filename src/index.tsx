import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import GlobalSocket from "./3_infrastructure/GlobalSocket";
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const globalSocket = new GlobalSocket();

root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);

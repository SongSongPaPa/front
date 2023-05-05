import React from "react";
import Logo from "@assets/image/SSPP.png";
import { LoginWrapper } from "./PageStyle";

function Login() {
  return (
    <LoginWrapper>
      <img src={Logo}></img>
      <a href={process.env.REACT_APP_API_URL + "/auth/login"} className="button">
        Login
      </a>
    </LoginWrapper>
  );
}

export default Login;

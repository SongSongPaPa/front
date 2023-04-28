import React, { useState, useEffect } from "react";
import axios from "axios";
import { request } from "http";
import "./LoginPage.css";
import Logo from "@assets/image/SSPP.png";

import { useNavigate } from "react-router-dom";
import { useUserProfile } from "@root/1_application/hooks/useUser";

function LoginPage() {
  return (
    <div className="image-container">
      <img className="Logo" src={Logo}></img>
      <a
        href={process.env.REACT_APP_API_URL + "/auth/login"}
        className="button"
      >
        Login
      </a>
      <button onClick={useUserProfile}>profile</button>
    </div>
  );
}

export default LoginPage;

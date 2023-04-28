import React, { useState, useEffect } from "react";
import axios from "axios";
import { request } from "http";
import "./LoginPage.css";
import Logo from "@assets/image/SSPP.png";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/lobby");
  };
  return (
    <div className="image-container">
      <img className="Logo" src={Logo}></img>
      <button className="button" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;

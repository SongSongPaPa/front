import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { request } from 'http';
import './LoginPage.css'
import Logo from "./image/SSPP.png"

function LoginPage() {
  return (
    <div className="image-container">
      <img className="Logo" src={Logo}></img>
      <button className="button">Login</button>
    </div>
  );
};

export default LoginPage;
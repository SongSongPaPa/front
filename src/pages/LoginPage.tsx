import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { request } from 'http';
import './LoginPage.css'
import Logo from "../image/SSPP.png"

function LoginPage() {
  return (
    <div className="image-container">
      <img className="Logo" src={Logo}></img>
        <a href='http://localhost:3001/auth/login' className="button">Login</a>
    </div>
  );
};

export default LoginPage;
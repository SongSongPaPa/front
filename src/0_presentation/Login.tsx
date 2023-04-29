import React from "react";

const Login = () => {
  return (
    <div>
      <a href={process.env.REACT_APP_API_URL + "/auth/login"}>login</a>
    </div>
  );
};

export default Login;

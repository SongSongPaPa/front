import React from 'react';

interface LoginPageProps {
  onLogin: () => void;
  loginUri: string;
}

function LoginPage(props:LoginPageProps) {
	const { loginUri } = props;

	const handleLogin = () => {
		window.location.href = loginUri;
	}

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>42Login</button>
    </div>
  );
};

export default LoginPage;


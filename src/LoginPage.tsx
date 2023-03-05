import React, { useState } from 'react';
import axios from 'axios';
import { request } from 'http';
import './button.css';

interface LoginPageProps {
  onLogin: () => void;
  loginUri: string;
}

function LoginPage(props:LoginPageProps) {
	const { loginUri } = props;

	const handleLogin = () => {
		//window.location.href = loginUri;
    axios.get("http://10.11.1.7:3000/echo/seunpark babo")
    .then(response => {console.log(response.data)});
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>42Login</button>
    </div>
  );
};

function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('input text:', text);
    axios.get("http://10.11.1.7:3000/redirection/")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter some text:
        <input type="text" value={text} onChange={handleChange}/>
      </label>
      <button className="button" type="submit">Submit</button>
    </form>
  );
}

function Login(){
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  }

  const handlePwChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log('input text:', text);
    axios.post("http://10.11.1.7:3000/", {id , password})
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        Id:
        <input type="text" value={id} onChange={handleIdChange}/>
        Pw:
        <input type="text" value={password} onChange={handlePwChange}/>
      </label>
      <button className="button" type="submit">Submit</button>
    </form>
  );
}

export default LoginPage;
export { TextInput, Login };


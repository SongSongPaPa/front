import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { request } from 'http';
import './button.css';

interface LoginPageProps {
  //onLogin: () => void;
  loginUri: string;
}

function LoginPage(props:LoginPageProps) {
	const { loginUri } = props;

	const handleLogin = () => {
		window.location.replace(loginUri);
    //axios.get("http://10.11.1.7:3000/echo/seunpark babo")
    //.then(response => {console.log(response.data)});
  }
   useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code){
      console.log(code);
    }
  }, []);
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

//import React, { useState } from 'react';
/*import './LoginPage.css';
import './Login.css';

interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}

function Login({ onSubmit }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

function LoginPage() {
  const handleLogin = (username: string, password: string) => {
    // 로그인 처리를 수행
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <div className="form-container">
        <Login onSubmit={handleLogin} />
      </div>
    </div>
  );
}

export default LoginPage;
*/

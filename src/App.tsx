import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  const handleLogin = () => {
    // handle login logic here
    console.log('User logged in!');
  };

  return (
    <div className="App">
      <LoginPage loginUri="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3caeb9dbdfcb3e93713d5075212189e056e453825da4e6a3c108ebba393824c9&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Floginreturn%2F42&response_type=code" onLogin={handleLogin} />
    </div>
  );
};

export default App;

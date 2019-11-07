import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hei verden!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dette blir gøy :D
        </a>
      </header>
      <body>
        Her er det bare tull og loking på g.
        Jaas
      </body>
    </div>
  );
}

export default App;

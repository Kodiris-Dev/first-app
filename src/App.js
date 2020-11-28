import React from 'react';
import logo from './logo.svg';
import './App.css';



function change() {
  test = "i hate this"
  console.log('why')
}
let test = "hello world"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={change}/>
        <p>
          {test}
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
}

export default App;

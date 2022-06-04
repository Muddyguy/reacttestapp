import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! Click link below for some fun!
        </p>
        <a
          className="App-link"
          href="https://catfact.ninja/fact"
          target="_blank"
          rel="noopener noreferrer"
        >
          MEOW
        </a>
      </header>
    </div>
  );
}

export default App;

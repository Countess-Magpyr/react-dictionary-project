import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>React Dictionary Project</h1>
        </header>
        <Dictionary />
      </div>
      <footer className="App-footer">
        <small>
          This project was made by{" "}
          <a href="https://github.com/Countess-Magpyr/react-dictionary-project">
            {" "}
            SugarMouse{" "}
          </a>
        </small>
      </footer>
    </div>
  );
}

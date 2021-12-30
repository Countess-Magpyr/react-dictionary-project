import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to my Dictionary</header>
        <Dictionary />
      </div>
      <footer className="App-footer">
        <small>This app was made by SugarMouse</small>
      </footer>
    </div>
  );
}

export default App;

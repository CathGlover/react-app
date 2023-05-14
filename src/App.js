import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="seashore" />
      <footer>
        Open source code by Catherine, published on{" "}
        <a
          href="https://github.com/CathGlover/react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;

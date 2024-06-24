import React, { useState } from "react";
import "./App.css";
import Grid from "./Grid";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {!isGameStarted && (
        <button id="grid-toggle" onClick={startGame}>
          Start Game
        </button>
      )}
      {isGameStarted && <Grid />}
    </div>
  );
}

export default App;

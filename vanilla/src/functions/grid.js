import React, { useState } from "react";
import GridElement from "./GridElement";
import "./App.css";

function Grid() {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || gameState[index]) return;
    const newGameState = gameState.slice();
    newGameState[index] = isXNext ? "X" : "O";
    setGameState(newGameState);
    setIsXNext(!isXNext);
    checkWinner(newGameState);
  };

  const checkWinner = (gameState) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        setWinner(gameState[a]);
        return;
      }
    }
    if (!gameState.includes(null)) {
      setWinner("Draw");
    }
  };

  return (
    <div className="grid-container">
      {gameState.map((value, index) => (
        <GridElement key={index} value={value} onClick={() => handleClick(index)} />
      ))}
      {winner && <div id="card-winner">{winner} wins!</div>}
    </div>
  );
}

export default Grid;

import React, { useState } from 'react';
import Grid from './assets/Grid';
import './App.css';

const App = () => {
  const [pions, setPions] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = (index) => {
    if (pions[index] || calculateWinner(pions)) {
      return;
    }

    const newPions = pions.slice();
    newPions[index] = isXNext ? 'X' : 'O';
    setPions(newPions);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setPions(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(pions);
  const status = winner ? `Gagnant: ${winner}` : `Joueur suivant : ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <Grid pions={pions} onSquareClick={handleSquareClick} />
      <button className="reset-button" onClick={handleReset}>Réinitialiser</button>
    </div>
  );
};

const calculateWinner = (pions) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (pions[a] && pions[a] === pions[b] && pions[a] === pions[c]) {
      return pions[a];
    }
  }
  return null;
};

export default App;

import { useState } from "react";
import { Grid } from "./Grid";

let arrayOfCasePlayed = [];
let playerOne = [];
let playerTwo = [];
const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export const Game = () => {
  const [visible, setVisible] = useState(false);
  const [gameStep, setGameStep] = useState(0);
  const [winner, setWinner] = useState(null);

  function gridDisplayAndGameInit() {
    arrayOfCasePlayed = [];
    playerOne = [];
    playerTwo = [];
    setGameStep(0);
    setWinner(null);
    setVisible(true);
  }

  function controlWinner(currentPlayer) {
    for (let sIndex = 0; sIndex < solutions.length; sIndex++) {
      let result = null;
      let score = 0;
      //

      for (let pIndex = 0; pIndex < currentPlayer.length; pIndex++) {
        const element = currentPlayer[pIndex];
        if (solutions[sIndex].includes(element)) {
          score++;
          result = solutions[sIndex];
        }
      }

      if (score >= 3) {
        const winner = {
          name: playerOne === currentPlayer ? "joueur 1" : "joueur 2",
          result: result,
        };
        return winner;
      }
    }
    return null;
  }

  function finalizeGame(w) {
    if (w) {
      setWinner(w);
    }
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  }

  function caseIsClicked(indexOfCase) {
    if (gameStep > 8) {
      finalizeGame(null);
    }
    const isPlayerTwo = gameStep % 2;
    const indexExistInArray = arrayOfCasePlayed.some((v) => v === indexOfCase);
    if (indexExistInArray) return;
    if (isPlayerTwo) {
      playerTwo.push(indexOfCase);
      const w = controlWinner(playerTwo);
      if (w) {
        finalizeGame(w);
      }
    } else {
      playerOne.push(indexOfCase);
      const w = controlWinner(playerOne);
      if (w) {
        finalizeGame(w);
      }
    }
    arrayOfCasePlayed.push(indexOfCase);
    setGameStep((prev) => ++prev);
    const className = isPlayerTwo ? "pi pi-circle-off" : "pi pi-times";
    return className;
  }

  return (
    <div>
      {winner && <h2>{winner.name + " à gagné"}</h2>}
      {visible === true ? (
        <Grid
          caseIsClicked={caseIsClicked}
          gameStep={gameStep}
          winner={winner}
        />
      ) : (
        <button id="grid-toogle" onClick={() => gridDisplayAndGameInit()}>
          Start game
        </button>
      )}
    </div>
  );
};

import { useState } from "react";
import { Grid } from "./Grid";

let arrayOfCasePlayed = [];

export const Game = () => {
  const [visible, setVisible] = useState(false);
  const [gameStep, setGameStep] = useState(0);
  function gridDisplayAndGameInit() {
    setVisible(true);
  }

  function caseIsClicked(indexOfCase) {
    const indexExistInArray = arrayOfCasePlayed.filter(
      (f) => f === indexOfCase
    );
    console.log(indexExistInArray);
    if (indexExistInArray.length > 0) {
      return;
    }
    //si le nombre de coup est superieur a x ne plus jouer et mettre fin à la game
    // controler si il y a un winner
    //case deja cliqué stop
    arrayOfCasePlayed.push(indexOfCase);
    setGameStep((prev) => ++prev);
    const className = gameStep % 2 ? "pi pi-circle-off" : "pi pi-times";
    return className;
  }

  return (
    <div>
      {visible === true ? (
        <Grid caseIsClicked={caseIsClicked} gameStep={gameStep} />
      ) : (
        <button id="grid-toogle" onClick={() => gridDisplayAndGameInit()}>
          Start game
        </button>
      )}
    </div>
  );
};
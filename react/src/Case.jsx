import { useEffect, useState } from "react";

export const Case = ({ index, caseIsClicked, winner }) => {
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState("");
  const [playerWinner, setPlayerWinner] = useState(null);

  useEffect(() => {
    if (winner) {
      const isWinCase = winner.result.some((v) => v === index);
      if (isWinCase) {
        setPlayerWinner(winner.name)
      }
    }
  }, [winner]);

  function updateGameAndMove() {
    setClicked(true);
    const className = caseIsClicked(index);
    if (className) {
      setClassName(className);
    }
  }

  return (
    <div
      onClick={updateGameAndMove}
      id={`grid-element-${index}`}
      style={{ backgroundColor: playerWinner == 'Joueur 1' ? "red" : playerWinner == 'Joueur 2' ? "blue" : "black"}}
    >
      {clicked === true && <i className={className}></i>}
    </div>
  );
};
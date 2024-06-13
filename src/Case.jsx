// Importation des hooks useEffect et useState de React
import { useEffect, useState } from "react";

// Composant Case, représentant une case individuelle du jeu de Tic-Tac-Toe
export const Case = ({ index, caseIsClicked, winner }) => {
  // États pour gérer si la case a été cliquée, la classe CSS de l'icône et si la case doit être colorée en rouge
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState("");
  const [bgRed, setBgRed] = useState(false);

  // Effet pour vérifier si la case fait partie de la combinaison gagnante lorsque le gagnant est déterminé
  useEffect(() => {
    if (winner) {
      const isWinCase = winner.result.some((v) => v === index);
      if (isWinCase) {
        setBgRed(true); // Change la couleur de fond en rouge si la case fait partie de la combinaison gagnante
      }
    }
  }, [winner]);

  // Fonction pour gérer le clic sur une case
  function updateGameAndMove() {
    setClicked(true); // Marque la case comme cliquée
    const className = caseIsClicked(index); // Appelle la fonction parent pour gérer le clic et obtenir la classe CSS de l'icône
    if (className) {
      setClassName(className); // Met à jour la classe CSS de l'icône si elle est définie
    }
  }

  // Rendu du composant
  return (
      <div
          onClick={updateGameAndMove} // Gère le clic sur la case
          id={`grid-element-${index}`} // Définit l'identifiant unique de la case
          style={{ backgroundColor: bgRed ? "red" : "gray" }} // Change la couleur de fond en rouge si la case fait partie de la combinaison gagnante
      >
        {clicked === true && <i className={className}></i>}
      </div>
  );
};

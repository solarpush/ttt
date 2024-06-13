// Importation du composant Case
import { Case } from "./Case";

// Composant Grid, représentant la grille du jeu de Tic-Tac-Toe
export const Grid = ({ caseIsClicked, winner }) => {
  return (
      <div id="grid-container">
        {/* Création d'un tableau de 9 éléments pour représenter les 9 cases de la grille */}
        {new Array(9).fill(0).map((_, index) => (
            // Pour chaque case, on rend le composant Case avec les props appropriées
            <Case
                key={index} // Clé unique pour chaque élément
                caseIsClicked={caseIsClicked} // Fonction appelée lorsque la case est cliquée
                index={index} // Index de la case
                winner={winner} // Information sur le gagnant
            />
        ))}
      </div>
  );
};

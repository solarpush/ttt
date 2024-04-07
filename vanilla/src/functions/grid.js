import { gameInit } from "./game";

export function resetAndInitDisplayGrid(button, grid) {
  button.style.display = "block";
  // fonction qui affiche la grille
  function gridDisplayAndGameInit() {
    gameInit(button, grid);
  }
  // Ajout d'un écouteur au click pour executé cette fonction
  button.addEventListener("click", () => gridDisplayAndGameInit());
}

import { Players } from "./player";

export function gameInit(button, grid) {
  // instantiation de la class players
  const players = new Players(true);

  players.startGame(button, grid);
  if (grid.firstElementChild) {
    // petit hack pour remove les elements présent dans la grille si une partie à déjà eu lieu
    grid.innerHTML = ``;
    const card = document.querySelector("#card-winner");
    // masquage d'information précédente
    card.style.display = "none";
  }
  //   boucle 9 fois
  for (let index = 0; index < 9; index++) {
    // cree une div avec un id unique composé de l'index
    const divElement = document.createElement("div");
    divElement.id = "grid-element-" + index;
    // ajout d'un écouteur au click pour déclenché la methode pplay de l'instance de players avec l'id de chaue grille
    divElement.addEventListener("click", () => {
      const currElement = document.querySelector("#grid-element-" + index);
      players.play(currElement);
    });
    // ajout de la div en tant qu'enfant de la grille
    grid.appendChild(divElement);
  }
}

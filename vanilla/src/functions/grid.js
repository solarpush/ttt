import { Players } from "./player";

export function setupGrid(element, cb) {
  if (!element) {
    return;
  }
}
export function reseyGrid(button, grid) {
  button.style.display = "block";
  grid.style.display = "none";
  button.addEventListener("click", () => toogleDisplay());
}
export function resetDisplayGrid(button, grid) {
  button.style.display = "block";
  function toogleDisplay() {
    grid.style.display = "grid";
    game(grid);
  }
  button.addEventListener("click", () => toogleDisplay());
}

function game(grid) {
  const players = new Players(true);
  players.startGame(document.querySelector("#grid-toogle"));
  if (grid.firstElementChild) {
    grid.innerHTML = ``;
    const card = document.querySelector("#card-winner");
    card.style.display = "none";
  }
  for (let index = 0; index < 9; index++) {
    const divElement = document.createElement("div");
    divElement.id = "grid-element-" + index;
    divElement.addEventListener("click", () => {
      const currElement = document.querySelector("#grid-element-" + index);

      players.play(currElement);
    });
    grid.appendChild(divElement);
  }
}

import { resetAndInitDisplayGrid } from "./grid";
import { displayWinner } from "./winner";

class Game {
  constructor() {
    this.gameStep = 0;
    this.solutions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    this.playerOne = [];
    this.playerTwo = [];
    this.winner = null;
  }
  startGame(button, grid) {
    //reset partie cache le boutton et affiche la grille
    button.style.display = "none";
    grid.style.display = "grid";
    this.playerOne = [];
    this.playerTwo = [];
    this.winner = null;
    this.gameStep = 0;
  }
  endGame() {
    if (!this.winner) {
      return;
    }
    const btn = document.querySelector("#grid-toogle");
    const grid = document.querySelector("#grid-container");

    resetAndInitDisplayGrid(btn, grid);
    displayWinner(this.winner);
  }
}

export class Players extends Game {
  constructor() {
    // appel au contructeur de la class dont Players extend
    super();
  }
  #gameController(element) {
    // controle si la partie peut continuer
    if (this.winner) {
      return;
    }
    if (!element) {
      return false;
    }
    const haveChild = element.firstElementChild;
    if (haveChild !== null) {
      return false;
    }
    return true;
  }

  play(element) {
    if (!this.#gameController(element)) {
      return;
    }
    const i = document.createElement("i");
    const gridPosition = element.id?.split("-")[2];
    let currPlayer;
    // pour chaques coup
    // ajout du coup joué au joueur correspondant
    // assignation du joueur current
    // ajout d'une croix ou d'un rond dans l'élément en parametre de la fonction
    if (this.gameStep % 2) {
      this.playerTwo.push(parseInt(gridPosition));
      currPlayer = this.playerTwo;
      i.className = "pi pi-circle-off";
    } else {
      this.playerOne.push(parseInt(gridPosition));
      currPlayer = this.playerOne;
      i.className = "pi pi-times";
    }

    this.gameStep = ++this.gameStep;
    element.appendChild(i);
    console.log(this.gameStep);

    // controle si le tableau de coup correspond
    for (let sIndex = 0; sIndex < this.solutions.length; sIndex++) {
      let result = null;
      let score = 0;

      for (let pIndex = 0; pIndex < currPlayer.length; pIndex++) {
        const element = currPlayer[pIndex];
        if (this.solutions[sIndex].includes(element)) {
          score++;
          result = this.solutions[sIndex];
        }
      }

      if (score >= 3) {
        const winner = {
          name: this.playerOne === currPlayer ? "joueur 1" : "joueur 2",
          result: result,
        };
        this.winner = winner;
        this.endGame();
        break;
      }
    }
    if (this.gameStep >= 9) {
      const winner = {
        name: "Egalitée",
        result: null,
      };
      this.winner = winner;
      this.endGame();
    }
  }
}

import "primeicons/primeicons.css";
import { resetAndInitDisplayGrid } from "./functions/grid.js";
import "./style.css";

// initialise les éléments de la grille avec leur logique interne

resetAndInitDisplayGrid(
  document.querySelector("#grid-toogle"),
  document.querySelector("#grid-container")
);

import "primeicons/primeicons.css";
import { resetDisplayGrid, setupGrid } from "./functions/grid.js";
import "./style.css";

setupGrid(document.querySelector("#grid-container"));
resetDisplayGrid(
  document.querySelector("#grid-toogle"),
  document.querySelector("#grid-container")
);

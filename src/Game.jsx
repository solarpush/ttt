// Importation des hooks useState et useEffect de React et du composant Grid
import { useState, useEffect } from "react";
import { Grid } from "./Grid";
import "./App.css";

// Initialisation des variables globales
let arrayOfCasePlayed = []; // Tableau pour suivre les cases jouées
let playerOne = []; // Tableau pour suivre les cases jouées par le joueur 1
let playerTwo = []; // Tableau pour suivre les cases jouées par le joueur 2

// Solutions gagnantes possibles au Tic-Tac-Toe
const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

// Composant principal du jeu
export const Game = () => {
  // États pour gérer la visibilité de la grille, le nombre d'étapes de jeu, le gagnant et le timer
  const [visible, setVisible] = useState(false);
  const [gameStep, setGameStep] = useState(0);
  const [winner, setWinner] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute = 60 secondes

  // Fonction pour initialiser le jeu et afficher la grille
  function gridDisplayAndGameInit() {
    arrayOfCasePlayed = []; // Réinitialise les cases jouées
    playerOne = []; // Réinitialise les cases du joueur 1
    playerTwo = []; // Réinitialise les cases du joueur 2
    setGameStep(0); // Réinitialise le nombre d'étapes de jeu
    setWinner(null); // Réinitialise le gagnant
    setVisible(true); // Affiche la grille
    setTimeLeft(60); // Réinitialise le timer à 1 minute
  }

  // Fonction pour contrôler le gagnant
  function controlWinner(currentPlayer) {
    for (let sIndex = 0; sIndex < solutions.length; sIndex++) {
      let result = null;
      let score = 0;

      // Vérifie si les cases jouées par le joueur correspondent à une solution gagnante
      for (let pIndex = 0; pIndex < currentPlayer.length; pIndex++) {
        const element = currentPlayer[pIndex];
        if (solutions[sIndex].includes(element)) {
          score++;
          result = solutions[sIndex];
        }
      }

      // Si un joueur a 3 cases alignées, il est déclaré gagnant
      if (score >= 3) {
        const winner = {
          name: playerOne === currentPlayer ? "joueur 1" : "joueur 2",
          result: result,
        };
        return winner;
      }
    }
    return null; // Pas de gagnant trouvé
  }

  // Fonction pour finaliser le jeu en affichant le gagnant et cachant la grille
  function finalizeGame(w) {
    if (w) {
      setWinner(w);
    }
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  }

  // Fonction appelée lorsqu'une case est cliquée
  function caseIsClicked(indexOfCase) {
    if (winner) return; // Si un gagnant ou une égalité a déjà été déclaré, ne pas continuer

    const isPlayerTwo = gameStep % 2; // Détermine si c'est le tour du joueur 2
    const indexExistInArray = arrayOfCasePlayed.some((v) => v === indexOfCase); // Vérifie si la case a déjà été jouée
    if (indexExistInArray) return; // Si la case a déjà été jouée, on sort de la fonction

    let className = "";
    if (isPlayerTwo) {
      playerTwo.push(indexOfCase); // Ajoute la case jouée au tableau du joueur 2
      className = "pi pi-circle-off"; // Classe CSS pour le symbole du joueur 2
    } else {
      playerOne.push(indexOfCase); // Ajoute la case jouée au tableau du joueur 1
      className = "pi pi-times"; // Classe CSS pour le symbole du joueur 1
    }

    arrayOfCasePlayed.push(indexOfCase); // Ajoute la case jouée au tableau des cases jouées
    setGameStep((prev) => ++prev); // Incrémente le nombre d'étapes de jeu

    // Vérifie s'il y a un gagnant après le coup actuel
    const currentPlayer = isPlayerTwo ? playerTwo : playerOne;
    const w = controlWinner(currentPlayer);
    if (w) {
      setWinner(w); // Affiche immédiatement le gagnant
      setTimeout(() => finalizeGame(w), 300); // Finalise le jeu après une courte pause pour permettre l'affichage du symbole
    } else if (gameStep === 8) {
      // Vérifie si toutes les cases ont été jouées et qu'il n'y a pas de gagnant (égalité)
      setWinner({ name: "Égalité", result: [] }); // Affiche immédiatement l'égalité
      setTimeout(() => finalizeGame({ name: "Égalité", result: [] }), 300); // Finalise le jeu après une courte pause pour permettre l'affichage du symbole
    }

    return className; // Retourne la classe CSS pour le symbole affiché
  }

  // Utilisation de useEffect pour gérer le timer
  useEffect(() => {
    if (visible && timeLeft > 0 && !winner) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setWinner({ name: "Égalité", result: [] });
      finalizeGame({ name: "Égalité", result: [] });
    }
  }, [timeLeft, visible, winner]);

  // Rendu du composant
  return (
      <div id="game-container">
        {winner && (
            <div id="winner-message">
              {winner.name === "Égalité" ? "Match nul" : `${winner.name} a gagné`}
            </div>
        )}
        {visible && (
            <>
              <Grid
                  caseIsClicked={caseIsClicked}
                  gameStep={gameStep}
                  winner={winner}
              />
              <div id="timer">
                Temps restant: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
              </div>
            </>
        )}
        {!visible && (
            <button id="grid-toggle" onClick={() => gridDisplayAndGameInit()}>
              Commencer une partie
            </button>
        )}
      </div>
  );
};
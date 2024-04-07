export function displayWinner(winner) {
  // afficher le vainqueur
  const winnerElement = document.querySelector("#card-winner");
  winnerElement.style.display = "flex";
  winnerElement.innerHTML = `<h3>${winner.name} à gagner </h3>`;
  const solution = winner.result;
  // pour caques grilles de la solution trouvé bg rouge
  solution.forEach((element) => {
    const winElement = document.querySelector("#grid-element-" + element);
    winElement.style.backgroundColor = "red";
  });
}

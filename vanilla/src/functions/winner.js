export function displayWinner(winner) {
  const winnerElement = document.querySelector("#card-winner");
  winnerElement.style.display = "flex";
  winnerElement.innerHTML = `<h3>${winner.name} à gagner </h3>`;
  const solution = winner.result;
  solution.forEach((element) => {
    const winElement = document.querySelector("#grid-element-" + element);
    winElement.style.backgroundColor = "red";
  });
}

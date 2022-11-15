function createGrid(numSqaures = 16) {
  const grid = document.querySelector("#grid");
  for (let i = 0; i < numSqaures; i++) {
    const gridRow = document.createElement("div");
    grid.appendChild(gridRow);
    for (let i = 0; i < numSqaures; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.appendChild(gridSquare);
    }
  }
}
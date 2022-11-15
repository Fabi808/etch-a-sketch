const grid = document.querySelector("#grid");
function createGrid(numSqaures = 16) {
  for (let i = 0; i < numSqaures; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    square.style.border = "1px solid black";
  }
}

createGrid();
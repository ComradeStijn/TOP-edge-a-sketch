let pixelAmount = 16;
let container = document.querySelector(".container");
let mouseDown = false;

createGrid();

// Create pixelAmount x pixelAmount grid
function createGrid() {
    for (let i = 0; i < pixelAmount ** 2; i++) {
        let cell = document.createElement("div");
        cell.classList.toggle("cell");
        cell.style.cssText = `height: ${100/pixelAmount}%; width: ${100/pixelAmount}%;`
        container.appendChild(cell);
    }
    drawOnGrid();
}


function deleteGrid() {
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach((toBeDeletedCell) => {
        toBeDeletedCell.remove();
    });
}


// When holding down mouse button, turn cell to black
function drawOnGrid() {
    let cell = document.querySelectorAll(".cell");
    cell.forEach((button) => {
        button.addEventListener("mouseleave", () => {
            if (mouseDown) {
                if (!button.classList.contains("cellBlack")){
                    button.classList.toggle("cellBlack");
                }
            }
        });

        button.addEventListener("mousedown", () => {
            mouseDown = true;
        });

        button.addEventListener("mouseup", () => {
            mouseDown = false;
        });
    });
}


let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
    let cell = document.querySelectorAll(".cell");
    cell.forEach((button) => {
        if (button.classList.contains("cellBlack")) {
            button.classList.toggle("cellBlack");
        }
    })
}


let changeGridSizeButton = document.querySelector("#setGrid");
changeGridSizeButton.addEventListener("click", () => {
    let changeAttempts = 0;
    let newGridSize;
    do {
        newGridSize = prompt("How many squares per side? (Between 1 and 100)")
        changeAttempts++;
    } while ((newGridSize <= 0 || newGridSize > 100) && changeAttempts !== 5);
    if (changeAttempts === 5) {
        alert("ERROR: Please enter a valid amount.")
    }
    pixelAmount = newGridSize;
    deleteGrid(); // reinitialize the grid
    createGrid();
})
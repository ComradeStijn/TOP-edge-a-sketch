let pixelAmount = 16;
let container = document.querySelector(".container");
let mouseDown = false;

createGrid();

// Create pixelAmount x pixelAmount grid
function createGrid() {
    for (let i = 0; i < pixelAmount ** 2; i++) {
        let cell = document.createElement("div");
        cell.classList.toggle("cell");
        cell.style.cssText = `height: ${100/pixelAmount}%; width: ${100/pixelAmount}%;
                            background-color: white;`
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


function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1))) + min;
}

function getRandomRGBColor() {
    let red = getRandomInt(0, 255);
    let green = getRandomInt(0, 255);
    let blue = getRandomInt(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

// When holding down mouse button, turn cell to random color, and have 
// each subsequent mouse hover increase opacity by 10%
function drawOnGrid() {
    let cell = document.querySelectorAll(".cell");
    cell.forEach((button) => {
        button.addEventListener("mouseleave", () => {
            if (mouseDown) {
                let cellOpacity = parseFloat(window.getComputedStyle(button).getPropertyValue('opacity'));
                let backgroundColor = window.getComputedStyle(button).backgroundColor;
                if (backgroundColor === 'white' || backgroundColor === 'rgb(255, 255, 255)') {
                    button.style.backgroundColor = getRandomRGBColor();
                    button.style.opacity = '0.1';
                } else if (cellOpacity < 1) {
                    cellOpacity += 0.1;
                    button.style.opacity = `${cellOpacity}`;
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
        button.style.backgroundColor = 'white';
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
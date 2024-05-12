let pixelAmount = 16;
let container = document.querySelector(".container");
let mouseDown = false;


// Create pixelAmount x pixelAmount grid
for (let i = 0; i < pixelAmount ** 2; i++) {
    let cell = document.createElement("div");
    cell.classList.toggle("cell");
    cell.style.cssText = `height: ${100/pixelAmount}%; width: ${100/pixelAmount}%;`
    container.appendChild(cell);
}

// When holding down mouse button, turn cell to black
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
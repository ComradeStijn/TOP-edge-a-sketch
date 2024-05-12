let pixelAmount = 16;
let container = document.querySelector(".container");



for (let i = 0; i < pixelAmount ** 2; i++) {
    let cell = document.createElement("div");
    cell.classList.toggle("cell");
    cell.style.cssText = `height: ${100/pixelAmount}%; width: ${100/pixelAmount}%;`
    container.appendChild(cell);
}
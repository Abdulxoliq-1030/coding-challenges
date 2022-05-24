const container = document.querySelector(".container");

window.addEventListener("load", () => {
  for (let i = 0; i < 16; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
  const cell = document.querySelectorAll(".cell");
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", () => {
      for (let i = 0; i < 4; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
      }
    });
  }
});

// const getRandomColors = function () {
//   let color;
//   let chars = "0123456789ABCDEF";

//   color = "#";
//   for (let i = 0; i < 6; i++) {
//     color = color + chars[Math.floor(Math.random() * 16)];
//   }
//   let activeCell;
//   for (let i = 0; i < cell.length; i++) {
//     activeCell = cell[i];
//   }
//   activeCell.style.backgroundColor = color;

//   activeCell.addEventListener("click", () => {
//     let column = document.createElement("div");
//     column.classList.add("cell");
//     container.appendChild(column);
//   });
// };

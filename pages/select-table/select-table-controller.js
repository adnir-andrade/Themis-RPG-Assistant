// Util buttons fancy hover
const customButtons = document.querySelectorAll(".custom-button");

customButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.mixBlendMode = "overlay";
    button.style.background =
      "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)";
  });
});

// Adding a new table

// Class tableHolder() {
//     constructor() {

//     }
// }

const tableHolder = document.getElementsByName("table-holder");

tableHolder.forEach((element) => {
  console.log(element);
});

// Crie um novo elemento div
const newDiv = document.createElement("div");
newDiv.classList.add("p-3");

// Crie um novo elemento botão
const newButton = document.createElement("button");
newButton.type = "submit";
newButton.classList.add(
  "btn",
  "btn-dark",
  "themys-button",
  "themys-button-transp"
);

newButton.textContent = "CHANGE THIS";

newDiv.appendChild(newButton);
tableHolder[0].appendChild(newDiv);

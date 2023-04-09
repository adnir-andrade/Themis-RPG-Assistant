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

class CampaignManager {
  constructor() {
    this.tableHolder = document.getElementsByName("table-holder");
  }

  createNewDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("p-3");
  }
}

tableHolder.forEach((element) => {
  console.log(element);
});

// Crie um novo elemento div

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

// Util buttons fancy hover
const customButtons = document.querySelectorAll(".custom-button");

customButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.mixBlendMode = "overlay";
    button.style.background =
      "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)";
  });
});

customButtons.forEach((button) => {
  button.addEventListener("mouseout", () => {
    button.style.mixBlendMode = "";
    button.style.background = "";
  });
});

// Adding a new table
class CampaignManager {
  constructor() {
    this.tableHolder = document.getElementsByName("table-holder");
    this.addButton = document.getElementById("add");
    this.newDiv;
    this.newButton;
  }

  init() {
    this.addCampaign();
  }

  addCampaign() {
    this.addButton.addEventListener("click", () => {
      this.createNewDiv();
      this.createNewButton();
      this.nameButton(this.requestName());
      this.appendElements();
    });
  }

  createNewDiv() {
    this.newDiv = document.createElement("div");
    this.newDiv.classList.add("p-3");
  }

  createNewButton() {
    this.newButton = document.createElement("button");
    this.newButton.type = "submit";
    this.newButton.classList.add(
      "btn",
      "btn-dark",
      "themys-button",
      "themys-button-transp"
    );
  }

  requestName() {
    let isDecided = false;
    let campaignName = "";

    do {
      campaignName = prompt("What shall be the name of your new Campaign?");

      isDecided = confirm(
        `Are you sure want to name it ${campaignName}?`,
        "Yes, No"
      );
    } while (!isDecided);

    return campaignName;
  }

  nameButton(campaignName) {
    this.newButton.textContent = this.formatString(campaignName);
  }

  appendElements() {
    this.newDiv.appendChild(this.newButton);
    this.tableHolder[0].appendChild(this.newDiv);
  }

  formatString(str) {
    const lower = str.toLowerCase();
    const first = lower.slice(0, 1).toUpperCase();
    const last = lower.slice(-1).toUpperCase();
    const middle = lower.slice(1, -1);
    return first.concat(middle, last);
  }
}

const campaignManager = new CampaignManager();
campaignManager.init();

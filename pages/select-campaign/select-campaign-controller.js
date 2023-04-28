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
    this.sortButton = document.getElementById("sort");
    this.campaigns = [];
  }

  init() {
    this.addCampaign();

    this.sortButton.addEventListener("click", () => {
      this.updateButtonContent();
    });
  }

  addCampaign() {
    this.addButton.addEventListener("click", () => {
      const name = this.requestName();
      this.pushCampaing(name);
      this.createNewButton(name);
    });
  }

  createNewButton(name) {
    const newButton = document.createElement("button");
    newButton.type = "submit";
    newButton.classList.add(
      "btn",
      "btn-dark",
      "themys-button",
      "themys-button-transp"
    );

      const formatString = (str) => {
        const lower = str.toLowerCase();
        const first = lower.slice(0, 1).toUpperCase();
        const last = lower.slice(-1).toUpperCase();
        const middle = lower.slice(1, -1);
        return first.concat(middle, last);
      };
  
      newButton.textContent = formatString(name);

      (function appendElements(newButton, tableHolder) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("p-3");
        newDiv.appendChild(newButton);
        tableHolder.appendChild(newDiv);
      })(newButton, this.tableHolder[0]);
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

  pushCampaing(campaignName) {
    this.campaigns.push(campaignName);
  }

  // Nested function
  updateButtonContent() {
    const buttons = document.querySelectorAll(".themys-button");

    const formatString = (str) => {
      const lower = str.toLowerCase();
      const first = lower.slice(0, 1).toUpperCase();
      const last = lower.slice(-1).toUpperCase();
      const middle = lower.slice(1, -1);
      return first.concat(middle, last);
    };

    const sortedCampaigns = this.campaigns.sort();
    buttons.forEach((button, index) => {
      button.textContent = formatString(sortedCampaigns[index]);
    });
  }
}

const campaignManager = new CampaignManager();
campaignManager.init();
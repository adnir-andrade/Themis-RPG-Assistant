'use strict';
// Adding a new table
class CampaignManager {
  constructor() {
    this.campaignContainer = document.getElementsByName('table-holder');
    this.addButton = document.getElementById('add');
    this.sortButton = document.getElementById('sort');
    this.campaigns = [];
  }

  init() {
    this.addCampaign();

    this.sortButton.addEventListener('click', () => {
      this.updateButtonContent();
    });
  }

  addCampaign() {
    this.addButton.addEventListener('click', () => {
      const name = this.requestName();

      this.pushCampaing(name);
      this.createNewButton(name);
    });
  }

  createNewButton(name) {
    const newButton = document.createElement('button');

    newButton.type = 'submit';
    newButton.classList.add(
      'btn',
      'btn-dark',
      'themys-button',
      'themys-button-transp'
    );

    const formatString = function (originalString) {
      const lowerCaseString = originalString.toLowerCase();

      const firstLetter = lowerCaseString.slice(0, 1).toUpperCase();

      const lastLetter = lowerCaseString.slice(-1).toUpperCase();

      const lettersInBetween = lowerCaseString.slice(1, -1);

      return firstLetter.concat(lettersInBetween, lastLetter);
    };

    newButton.textContent = formatString(name);

    (function appendElements(newButton, campaignContainer) {
      campaignContainer.insertAdjacentHTML(
        'afterbegin',
        `<div class="p-3">
          ${newButton.outerHTML}
        </div>`
      );
    })(newButton, this.campaignContainer[0]);
  }

  requestName() {
    let isDecided = false;

    let campaignName = '';

    do {
      campaignName = prompt('What shall be the name of your new Campaign?');
      isDecided = confirm(
        `Are you sure want to name it ${campaignName}?`,
        'Yes, No'
      );
    } while (!isDecided);

    return campaignName;
  }

  pushCampaing(campaignName) {
    this.campaigns.push(campaignName);
  }

  // Nested function
  updateButtonContent() {
    const buttons = document.querySelectorAll('.themys-button');

    const formatString = (originalString) => {
      const lowerCaseString = originalString.toLowerCase();

      const firstLetter = lowerCaseString.slice(0, 1).toUpperCase();

      const lastLetter = lowerCaseString.slice(-1).toUpperCase();

      const lettersInBetween = lowerCaseString.slice(1, -1);

      return firstLetter.concat(lettersInBetween, lastLetter);
    };

    const sortedCampaigns = this.campaigns.sort();

    buttons.forEach((button, index) => {
      button.textContent = formatString(sortedCampaigns[index]);
    });
  }
}

const campaignManager = new CampaignManager();

campaignManager.init();

$('div#option-buttons > button').each(function () {
  $(this).on('mouseover', () => {
    $(this).css({
      'mix-blend-mode': 'overlay',
      background:
        'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
    });
  });
});

$('div#option-buttons > button').each(function () {
  $(this).on('mouseout', () => {
    $(this).css({
      'mix-blend-mode': '',
      background: '',
    });
  });
});

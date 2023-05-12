'use strict';

// The code is purposely disorganized to comply with the activity's requirements
// Adding Listener onload
window.addEventListener('load', function () {
  document.getElementById('multiclass').addEventListener('change', function () {
    const multiclassFields = document.querySelectorAll('.multiclass-field');

    for (let i = 0; i < multiclassFields.length; i++) {
      multiclassFields[i].disabled = !this.checked;
    }
  });
});

// Sorting alphabetically
const races = ['Human', 'Dwarf', 'Elf', 'Orc', 'Malit', 'Ramadriin'];

races.sort(function (firstRace, secondRace) {
  if (firstRace < secondRace) {
    return -1;
  }
  if (firstRace > secondRace) {
    return 1;
  }
  return 0;
});

races.forEach((race) => {
  const option = document.createElement('option');

  option.text = race;
  option.value = race.toLowerCase();

  const raceDropdown = document.getElementById('race-dropdown');

  raceDropdown.add(option);
});

// Dynamically creating options for a dropdown using a function that calls another function
function createOptions(firstValue, lastValue, selectDropdown, select) {
  for (let i = firstValue; i <= lastValue; i++) {
    const option = document.createElement('option');

    option.value = i;
    option.textContent = i;

    const selectedDropdown = selectDropdown(select);

    selectedDropdown.appendChild(option);
  }
}

function selectDropdownById(selectId) {
  return document.getElementById(selectId);
}

createOptions(1, 20, selectDropdownById, 'character-dropdown');
createOptions(1, 10, selectDropdownById, 'level-dropdown');

// Making a mistake, aka, using an ID to select an element. thisIsTotallyNotRecommended is an ID inside the HTML
for (let i = 1; i <= 10; i++) {
  const option = document.createElement('option');

  option.value = i;
  option.textContent = i;
  thisIsTotallyNotRecommended.appendChild(option);
}

// Auto-executable function that I need to refine
(function () {
  document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowUp') {
      userInput.focus();
    }
  });
})();

// Cool input that somehow worked
const userInput = document.getElementsByClassName('character-name-input')[0];

userInput.addEventListener('input', () => {
  userInput.style.width = `${userInput.value.length * 27}px`;
});

// Focus and Blur sexy events
userInput.addEventListener('focus', () => {
  userInput.style.fontSize = 30 + 'px';
});

userInput.addEventListener('blur', () => {
  userInput.style.fontSize = 28 + 'px';
});

// Stat screen

// const statSquares = document.getElementsByClassName("stat-square");

// for (let i = 0; i < statSquares.length; i++) {
//   const element = statSquares[i];
//   console.log("Test!");
// }

const form1 = document.getElementById('name-form');

const form2 = document.getElementById('character-form');

const form3 = document.getElementById('stats-form');

const form4 = document.getElementById('perks-form');

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  form1.blur();

  console.log('It worked!');
});

// Second screen
const statSquares = document.getElementsByClassName('stat-bg');

const selectedSquare = document.getElementById('selected-stat');

let selectedRowIndex = 0;

for (let i = 0; i < statSquares.length; i++) {
  statSquares[i].addEventListener('click', (event) => {
    selectedSquare.textContent = statSquares[i].textContent;
    selectedRowIndex = i;
  });
}

const valueSquares = document.getElementsByClassName('value-bg');

const adjustMod = (index) => {
  let newModValue = parseInt(valueSquares[index].textContent) - 5;

  if (newModValue > 0) {
    newModValue = '+' + newModValue.toString();
  }

  const modSquares = document.getElementsByClassName('mod-bg');

  modSquares[index].textContent = newModValue;
};

const decreaseValueButton = document.getElementById('decrease-value');

decreaseValueButton.addEventListener('click', (event) => {
  const pointsLeft = document.getElementById('points-left');

  if (parseInt(valueSquares[selectedRowIndex].textContent) > 1) {
    valueSquares[selectedRowIndex].textContent =
      parseInt(valueSquares[selectedRowIndex].textContent) - 1;
    pointsLeft.textContent = parseInt(pointsLeft.textContent) + 1;
    adjustMod(selectedRowIndex);
  }
});

const increaseValueButton = document.getElementById('increase-value');

increaseValueButton.addEventListener('click', (event) => {
  const pointsLeft = document.getElementById('points-left');

  if (parseInt(pointsLeft.textContent) > 0 && parseInt(valueSquares[selectedRowIndex].textContent) <  10) {
    valueSquares[selectedRowIndex].textContent =
      parseInt(valueSquares[selectedRowIndex].textContent) + 1;
    pointsLeft.textContent = parseInt(pointsLeft.textContent) - 1;
    adjustMod(selectedRowIndex);
  }
});

'use strict';

// Only to test. Add "preventDefault to every form"
const nameForm = document.getElementById('name-form');

nameForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submitted');
});

// General Controller
const characterCreation = (function () {
  const getName = () => {
    const nameForm = document.getElementById('name-form');

    return nameForm.elements.username.value;
  };

  const getStats = () => {
    const valueSquares = document.getElementsByClassName('value-bg');

    const characterStatsValue = new Array();

    for (let i = 0; i < valueSquares.length; i++) {
      characterStatsValue.push(parseInt(valueSquares[i].textContent));
    }
  };

  const getCharacterLevel = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[0].value;
  };

  const getCharacterRace = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[1].value;
  };

  const getCharacterClass = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[2].value;
  };

  const getCharacterClassLevel = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[3].value;
  };

  const isMulticlass = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[4].checked;
  };

  const getCharacterSecondClass = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[5].value;
  };

  const getCharacterSecondClassLevel = () => {
    const characterForm = document.getElementById('character-form');

    return characterForm.elements[6].value;
  };

  return {
    getName: getName,
    getCharacterLevel: getCharacterLevel,
    getCharacterRace: getCharacterRace,
    getCharacterClass: getCharacterClass,
    getCharacterClassLevel: getCharacterClassLevel,
    isMulticlass: isMulticlass,
    getCharacterSecondClass: getCharacterSecondClass,
    getCharacterSecondClassLevel: getCharacterSecondClassLevel,
    getStatsValues: getStats,
  };
})();

const characters = [];

const addCharacter = (character) => {
  characters.push(character);
};

const validateForms = () => {
  const nameForm = document.getElementById('name-form');
  console.log(nameForm.elements[0].value);
  if (nameForm.elements[0].value === '') {
    console.log('Name is empty!');
    return false;
  }

  return true;
};

const submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const isValid = validateForms();

  // submitCharacter();
  let characterSecondClass = null;

  let characterSecondClassLevel = null;

  if (characterCreation.isMulticlass()) {
    characterSecondClass = characterCreation.getCharacterSecondClass();
    characterSecondClassLevel =
      characterCreation.getCharacterSecondClassLevel();
  }
  characterCreation.getStatsValues();

  const character = {
    name: characterCreation.getName(),
    level: characterCreation.getCharacterLevel(),
    race: characterCreation.getCharacterRace(),
    class: characterCreation.getCharacterClass(),
    classLevel: characterCreation.getCharacterClassLevel(),
    secondClass: characterSecondClass,
    secondClassLevel: characterSecondClassLevel,
  };

  addCharacter(character);
});

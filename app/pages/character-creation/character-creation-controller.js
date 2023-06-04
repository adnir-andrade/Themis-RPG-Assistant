'use strict';

function changeFocus(event) {
  event.preventDefault();

  const characterDropdown = document.getElementById('character-dropdown');

  characterDropdown.focus();
}

// General Controller
const characterCreation = (function () {
  const getName = () => {
    const nameForm = document.getElementById('name-form');

    return nameForm.elements.username.value;
  };

  const getValues = () => {
    const valueSquares = document.getElementsByClassName('value-bg');

    const characterStatsValue = new Array();

    for (let i = 0; i < valueSquares.length; i++) {
      characterStatsValue.push(parseInt(valueSquares[i].textContent));
    }

    return characterStatsValue;
  };

  const getCharacterLevel = () => {
    const characterForm = document.getElementById('character-form');

    return parseInt(characterForm.elements[0].value);
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

    return parseInt(characterForm.elements[3].value);
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

    return parseInt(characterForm.elements[6].value);
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
    getValues: getValues,
  };
})();

const validateForms = () => {
  const nameForm = document.getElementById('name-form');
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

  let characterSecondClass = null;

  let characterSecondClassLevel = null;

  if (characterCreation.isMulticlass()) {
    characterSecondClass = characterCreation.getCharacterSecondClass();
    characterSecondClassLevel =
      characterCreation.getCharacterSecondClassLevel();
  }
  characterCreation.getValues();

  const character = {
    name: characterCreation.getName(),
    characterLevel: characterCreation.getCharacterLevel(),
    race: characterCreation.getCharacterRace(),
    baseClass: characterCreation.getCharacterClass(),
    baseClassLevel: characterCreation.getCharacterClassLevel(),
    secondClass: characterSecondClass,
    secondClassLevel: characterSecondClassLevel,
  };

  addCharacter(character);
});

const characters = [];

const addCharacter = (character) => {
  $.ajax({
    url: '/store-character',
    method: 'POST',
    data: {
      name: character.name,
      characterLevel: character.characterLevel,
      race: character.race,
      baseClass: character.baseClass,
      baseClassLevel: character.baseClassLevel,
      secondClass: character.secondClass,
      secondClassLevel: character.secondClassLevel,
    },
    success: function (response) {
      console.log(response.message);
      console.log('Character added successfully!');
    },
    error: function (error) {
      console.error(error);
      console.log(`Murphy's Law`);
    },
  });

  characters.push(character);
};

// jQuery Plugin
const requestRandomName = () => {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: 'https://randomuser.me/api/?inc=name',
      dataType: 'json',
      success: function (randomuser) {
        resolve(randomuser.results[0]);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
};

const changeName = function (firstName, lastName) {
  $('#character-name').val(firstName + ' ' + lastName);
};

$('#random-name').click(function () {
  let firstName;
  let lastName;

  requestRandomName()
    .then((randomuser) => {
      firstName = randomuser.name.first;
      lastName = randomuser.name.last;
    })
    .catch((error) => {
      console.error('There was an annoying error:', error);
    })
    .then(() => {
      changeName(firstName, lastName);
    });
});

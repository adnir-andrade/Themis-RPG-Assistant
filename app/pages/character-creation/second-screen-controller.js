'use strict';

const statSquares = document.getElementsByClassName('stat-bg');

const selectedSquare = document.getElementById('selected-stat');

let selectedRowIndex = 0;

for (let i = 0; i < statSquares.length; i++) {
  statSquares[i].addEventListener('click', (event) => {
    selectedSquare.textContent = statSquares[i].textContent;
    selectedRowIndex = i;
  });
}

const changeStats = (function () {
  const valueSquares = document.getElementsByClassName('value-bg');

  const adjustMod = (index) => {
    let newModValue = parseInt(valueSquares[index].textContent) - 5;

    if (newModValue > 0) {
      newModValue = '+' + newModValue.toString();
    }

    const modSquares = document.getElementsByClassName('mod-bg');

    modSquares[index].textContent = newModValue;
  };

  const pointsLeft = document.getElementById('points-left');

  const increase = (index) => {
    if (
      parseInt(pointsLeft.textContent) > 0 &&
      parseInt(valueSquares[index].textContent) < 10
    ) {
      valueSquares[index].textContent =
        parseInt(valueSquares[index].textContent) + 1;
      pointsLeft.textContent = parseInt(pointsLeft.textContent) - 1;
      adjustMod(index);
    }
  };

  const decrease = (index) => {
    if (parseInt(valueSquares[index].textContent) > 1) {
      valueSquares[index].textContent =
        parseInt(valueSquares[index].textContent) - 1;

      const pointsLeft = document.getElementById('points-left');

      pointsLeft.textContent = parseInt(pointsLeft.textContent) + 1;
      adjustMod(index);
    }
  };

  const reset = () => {
    for (let i = 0; i < valueSquares.length; i++) {
      valueSquares[i].textContent = 5;
      adjustMod(i);
    }

    pointsLeft.textContent = 10;
  };

  //TODO: Finish implementing randomize with code you did for the Java Project
  const randomize = () => {
    let pointsPool = 45 - 7; // Total points - 7 stats

    let randomNumber = 1;

    for (let i = 0; i < valueSquares.length; i++) {
      randomNumber = Math.floor(Math.random() * 10) + 1;

      if (pointsPool - randomNumber >= 0) {
        pointsPool -= randomNumber;
      } else if (pointsPool === 0) {
        randomNumber = pointsPool;
      }
      valueSquares[i].textContent = randomNumber;
      adjustMod(i);
    }
    console.log(pointsPool);
    pointsLeft.textContent = 0;
  };

  return {
    adjustMod: adjustMod,
    increase: increase,
    decrease: decrease,
    randomize: randomize,
    reset: reset,
  };
})();

const decreaseValueButton = document.getElementById('decrease-value');

decreaseValueButton.addEventListener('click', (event) => {
  changeStats.decrease(selectedRowIndex);
});

const increaseValueButton = document.getElementById('increase-value');

increaseValueButton.addEventListener('click', (event) => {
  changeStats.increase(selectedRowIndex);
});

const randomValueButton = document.getElementById('random');

randomValueButton.addEventListener('click', (event) => {
  changeStats.randomize();
});

const resetValueButton = document.getElementById('reset');

resetValueButton.addEventListener('click', (event) => {
  changeStats.reset();
});

// Preset buttons

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const getStats = () => {
  const statField = $('.stat-bg');

  const stats = [];

  for (let i = 0; i < statField.length; i++) {
    stats.push($(statField[i]).text());
  }

  return stats;
};

const getValues = () => {
  const valueField = $('.value-bg');

  const values = [];

  for (let i = 0; i < valueField.length; i++) {
    values.push($(valueField[i]).text());
  }

  return values;
};

const setPresetValues = (button, index) => {
  $(button).text('Load preset ' + index);
  $(button).removeAttr('data-toggle');
  $(button).removeAttr('data-bs-original-title');
  $(button).removeAttr('aria-describedby');

  const tooltip = $(button).data('bs.tooltip');
  if (tooltip && tooltip.isActive) {
    $(button).tooltip('hide').tooltip('dispose');
  }

  const stats = getStats();

  const values = getValues();

  for (let i = 0; i < stats.length; i++) {
    localStorage.setItem(stats[i] + index, values[i]);
  }
};

const loadPresetValues = (index) => {
  console.log('Loading!');

  const valueField = $('.value-bg');

  const stats = getStats();

  for (let i = 0; i < valueField.length; i++) {
    console.log('Annie, are you alright?');
    console.log(stats[i] + index);
    const s = stats[i] + index;
    const storedValue = localStorage.getItem(s);

    $(valueField[i]).text(storedValue);
    changeStats.adjustMod(i);
  }
  $('#points-left').text('0');
};

$('.preset-btn').each(function (index) {
  let isSaved = false;

  $(this).on('click', function (event) {
    const pointsLeft = $('#points-left').text();
    $(this).tooltip('hide');

    if (pointsLeft == 0 && !isSaved) {
      isSaved = true;
      setPresetValues(this, index + 1);
      return;
    }

    if (isSaved) {
      loadPresetValues(index + 1);
    }
  });
});

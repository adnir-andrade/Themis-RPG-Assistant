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

  //TODO: Finish implementing randomize
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
// TODO: Implement preset buttons functionality

$('button.btn-sm').each(() => {
  $this.click;
});

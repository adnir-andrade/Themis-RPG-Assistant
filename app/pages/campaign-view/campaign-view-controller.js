"use strict";
const characterButton = document.getElementById("character-1");

const originalPosition = characterButton.offsetLeft;

const newPosition = (function () {
  const OFFSET = 0.4;
  
  return originalPosition - originalPosition * OFFSET;
})();

let isSelected = false;

characterButton.addEventListener("click", function move() {
  if (isSelected) {
    this.style.position = "static";
    this.style.left = `${originalPosition}px`;
  } else {
    this.style.position = "relative";
    this.style.left = `${newPosition}px`;
  }
  isSelected = !isSelected;
});

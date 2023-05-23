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

// Fancy Buttons again. TODO: Refactor to Util

// const customButtons = document.querySelectorAll(".custom-button");

// customButtons.forEach((button) => {
//   button.addEventListener("mouseover", () => {
//     button.style.mixBlendMode = "overlay";
//     button.style.background =
//       "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)";
//   });
// });

// customButtons.forEach((button) => {
//   button.addEventListener("mouseout", () => {
//     button.style.mixBlendMode = "";
//     button.style.background = "";
//   });
// });

// jQuery updates:
$(".custom-button").each(function() {
  $(this).on("mouseover", () => {
    $(this).css({
      "mix-blend-mode": "overlay",
      "background": "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)"
    });
  });
});

$(".custom-button").each(function() {
  $(this).on("mouseout", () => {
    $(this).css({
      "mix-blend-mode": "",
      "background": ""
    })
  });
});
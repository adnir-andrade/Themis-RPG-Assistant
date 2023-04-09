const customButtons = document.querySelectorAll(".custom-button");

// customButtons[0].addEventListener("mouseover", function () {
//   // faça algo quando o cursor estiver sobre a tag custom-button
//   console.log("Cursor sobre custom-button");
// });

customButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    console.log("Cursor sobre custom-button");
    button.style.mixBlendMode = "overlay";
  });
});

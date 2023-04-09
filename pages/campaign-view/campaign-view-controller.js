const char1 = document.getElementById("char-1");
const originalPosition = char1.offsetLeft;
const newPosition = originalPosition - originalPosition * 0.4;

let flag = 1;
char1.addEventListener("click", function move() {
  if (flag > 0) {
    this.style.position = "relative";
    this.style.left = `${newPosition}px`;
  } else {
    this.style.position = "static";
    this.style.left = `${originalPosition}px`;
  }

  flag *= -1;
});

const logoImg = document.getElementsByTagName("img")[0];

function showLogo() {
  setTimeout(function () {
    console.log("Aguardou 2 segundos.");
    const logoTimer = function () {
      let count = 0;
      const intervalId = setInterval(function () {
        console.log("count: " + count);
        logoImg.style.opacity = count * 0.01;
        count++;
        if (count > 80) clearInterval(intervalId);
      }, 30);
    };
    logoTimer();
  }, 1500);
}

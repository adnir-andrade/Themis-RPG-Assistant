let count = 0;

const logoImg = document.getElementsByTagName("img")[0];

function showLogo() {
  const logoTimer = function () {
    let count = 0;
    const intervalId = setInterval(function () {
      console.log("count: " + count);
      logoImg.style.opacity = count * 0.01;
      count++;
      if (count > 50) clearInterval(intervalId);
    }, 30);
  };

  logoTimer();
}

//   setTimeout(function () {
//     console.log("Stopped interval");
//   }, 1000);

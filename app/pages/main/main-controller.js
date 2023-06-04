'use strict';

function showLogo() {
  setTimeout(function () {
    const logoTimer = () => {
      let count = 0;

      const intervalId = setInterval(() => {
        const logoImage = document.getElementsByTagName('img')[0];

        logoImage.style.opacity = count * 0.01;
        count++;
        if (count > 80) {
          clearInterval(intervalId);
        }
      }, 30);
    };
    logoTimer();
  }, 1500);
}

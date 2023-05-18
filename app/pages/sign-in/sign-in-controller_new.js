'use strict';
const form = document.getElementById('form');
const email = form.elements['email'];
const password = form.elements[1];
const confirmPassword = form.elements[2];

const redirectTo = () => {
    window.location.href = '/app/pages/select-campaign/select-campaign.html';
  };

form.addEventListener('submit', (event) => {
  event.preventDefault();

  redirectTo();
});

// email.addEventListener('input', (event) => {
//     event.target.setCustomValidity(
//       event.target.value.length < 8
//         ? 'Your password must contain at least 8 characters.'
//         : ''
//     );
//   });

password.addEventListener('input', (event) => {
  event.target.setCustomValidity(
    event.target.value.length < 8
      ? 'Your password must contain at least 8 characters.'
      : ''
  );
});

confirmPassword.addEventListener('input', (event) => {
    event.target.setCustomValidity(
    event.target.value.length < 8
      ? 'Your password confirmation also needs to be 8 characters long.'
      : ''
  );
});

const validateForm = () => {
  if (!verifyEmail(this.email.value) || !verifyPassword(this.password.value))
    return;

  this.form.submit();
  this.redirectTo();
};



// sign-in validator

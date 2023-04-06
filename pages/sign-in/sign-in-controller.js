const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!validatePassword(password) || !validatePassword(confirmPassword)) {
    window.alert("Please, insert a valid password.");
    return;
  }

  // TODO: Compare passwords to check if they match

  form.submit();
  window.location.href = "/pages/select-table/select-table.html";
});

function validatePassword(password) {
  if (password.length > 8) return true;
  else return false;
}

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

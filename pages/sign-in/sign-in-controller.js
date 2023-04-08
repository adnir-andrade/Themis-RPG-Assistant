const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!validateEmail(email) ?? false) {
    window.alert("Please, insert a valid e-mail address.");
    return;
  }

  if (!validatePassword(password) || !validatePassword(confirmPassword)) {
    window.alert("Please, insert a valid password.");
    return;
  }

  if (!isEqual(password, confirmPassword)) {
    window.alert("Password does not match. Please, try again.");
    return;
  }

  form.submit();
  window.location.href = "/pages/select-table/select-table.html";
});

function validatePassword(password) {
  if (password.length > 8) return true;
  else return false;
}

const isEqual = (password, confirmPassword) => {
  return password === confirmPassword;
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

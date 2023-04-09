export default class FormValidator {
  constructor() {
    this.form = document.getElementById("form");
    this.email = document.getElementById("email").value;
    this.password = document.getElementById("password").value;
    this.confirmPassword = document.getElementById("confirmPassword").value;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  if (!verifyEmail() || !verifyPassword()) return;

  form.submit();
  redirectTo();
}

function verifyPassword() {
  if (!validatePasswordLength()) {
    window.alert("Please, insert a password with at least 8 characters.");
    return false;
  }

  if (!doPasswordMatch()) {
    window.alert("Password does not match. Please, try again.");
    return false;
  }

  return true;
}

function validatePasswordLength() {
  if (!isLengthValid(password.value) || !isLengthValid(confirmPassword.value))
    return false;

  return true;
}

function doPasswordMatch() {
  if (isEqual(password.value, confirmPassword.value)) return true;

  return false;
}

function isLengthValid(password) {
  return password.length > 8;
}

const isEqual = (password, confirmPassword) => {
  return password === confirmPassword;
};

function verifyEmail() {
  if (!isFormatValid(email.value) ?? false) {
    window.alert("Please, insert a valid e-mail address.");
    return false;
  }

  return true;
}

const isFormatValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function redirectTo() {
  window.location.href = "/pages/select-table/select-table.html";
}

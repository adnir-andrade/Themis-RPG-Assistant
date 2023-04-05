const form = document.getElementById("form");

function validation() {}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  if (!validadeEmail(email)) {
    alert("Please, insert a valid email.");
    return;
  }

  if (!validadePassowrd(password)) {
    alert("Please, insert a valid password.");
    return;
  }

  form.submit();
  window.location.href = "/pages/select-table/select-table.html";
});

function validadeEmail(email) {
  // TODO: validade email
  return true;
}

function validadePassowrd(password) {
  if (password.length < 8) {
    alert("A password must contain at least 8 characters.");
    return false;
  }

  return true;
}

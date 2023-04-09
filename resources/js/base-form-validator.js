class FormValidator {
  constructor() {
    this.form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    this.minimumLength = 8;
  }

  init() {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.validateForm();
    });
  }

  validateForm() {
    if (!this.verifyEmail(email.value) || !this.verifyPassword(password))
      return;

    form.submit();
    this.redirectTo();
  }

  verifyPassword(password) {
    throw new Error("verifyPassword() must be implemented.");
  }

  validatePasswordLength(password) {
    if (password.value.length < this.minimumLength) return false;

    return true;
  }

  verifyEmail(email) {
    if (!this.isFormatValid(email) ?? false) {
      window.alert("Please, insert a valid e-mail address.");
      return false;
    }

    return true;
  }

  isFormatValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  redirectTo() {
    window.location.href = "/pages/select-table/select-table.html";
  }
}

const formsUtils = {
  FormValidator,
  // init,
  // validateForm,
  // validatePasswordLength,
  // verifyEmail,
  // isFormatValid,
  // redirectTo,
};

export default formsUtils;

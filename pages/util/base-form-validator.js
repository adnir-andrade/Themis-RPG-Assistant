// export class FormValidator {
// Instalar AUTO-IMPORT no VSCODE
class FormValidator {
  constructor() {
    this.form = document.getElementById("form");
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
    this.minimumLength = 8;
  }

  init() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.alert("A " + event.type + " was initiated.");
      this.validateForm();
    });
  }

  validateForm() {
    if (
      !this.verifyEmail(this.email.value) ||
      !this.verifyPassword(this.password.value)
    )
      return;

    this.form.submit();
    this.redirectTo();
  }

  verifyPassword(password) {
    throw new Error("verifyPassword() must be implemented.");
  }

  validatePasswordLength(password) {
    if (password.length < this.minimumLength) return false;

    return true;
  }

  verifyEmail(email) {
    if (!this.isFormatValid(email) ?? false) {
      window.alert("Please, insert a valid e-mail address.");
      return false;
    }

    return true;
  }

  isFormatValid(email) {
    const isValid = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    return isValid(email);
  }

  redirectTo() {
    window.location.href = "/pages/select-campaign/select-campaign.html";
  }
}

const formsUtils = {
  FormValidator,
};

export default formsUtils;

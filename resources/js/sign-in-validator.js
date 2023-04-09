import FormValidator from "./base-form-validator.js";

class SignInValidator extends FormValidator {
  constructor() {
    super();
    this.confirmPassword = document.getElementById("confirmPassword").value;
  }

  verifyPassword() {
    if (
      !validatePasswordLength(password) ||
      !validatePasswordLength(confirmPassword)
    ) {
      window.alert("Please, insert a password with at least 8 characters.");
      return false;
    }

    if (!doPasswordMatch()) {
      window.alert("Password does not match. Please, try again.");
      return false;
    }

    return true;
  }

  doPasswordMatch() {
    if (password === confirmPassword) return true;

    return false;
  }
}

const signInValidator = {
  SignInValidator,
  // verifyPassword,
  // doPasswordMatch,
};

export default signInValidator;

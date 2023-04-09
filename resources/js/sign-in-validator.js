import formsUtils from "./base-form-validator.js";

class SignInValidator extends formsUtils.FormValidator {
  constructor() {
    super();
    this.confirmPassword = document.getElementById("confirmPassword").value;
  }

  verifyPassword() {
    if (
      !super.validatePasswordLength(password) ||
      !super.validatePasswordLength(confirmPassword)
    ) {
      window.alert("Please, insert a password with at least 8 characters.");
      return false;
    }

    if (!this.doPasswordMatch(password.value, confirmPassword.value)) {
      window.alert("Password does not match. Please, try again.");
      return false;
    }

    return true;
  }

  doPasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
  }
}

const signInUtils = {
  SignInValidator,
};

export default signInUtils;

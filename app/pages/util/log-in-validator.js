'use strict';
import formsUtils from './base-form-validator.js';

class LogInValidator extends formsUtils.FormValidator {
  constructor() {
    super();
  }

  validateForm() {
    if (
      !this.verifyEmail(this.email.value) ||
      !this.verifyPassword(this.password.value)
    ) {
      return;
    }

    super.redirectTo();
  }

  verifyPassword(password) {
    if (!super.validatePasswordLength(password)) {
      return false;
    }
    return true;
  }
}

const logInUtils = {
  LogInValidator,
};

export default logInUtils;

"use strict";

import formsUtils from "./base-form-validator.js";

class LogInValidator extends formsUtils.FormValidator {
  constructor() {
    super();
  }

  verifyPassword(password) {
    if (!super.validatePasswordLength(password)) {
      window.alert("Please, insert a password with at least 8 characters.");
      return false;
    }
    return true;
  }
}

const logInUtils = {
  LogInValidator,
};

export default logInUtils;

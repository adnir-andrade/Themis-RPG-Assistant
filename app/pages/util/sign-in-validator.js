'use strict';
import formsUtils from './base-form-validator.js';

class SignInValidator extends formsUtils.FormValidator {
  constructor() {
    super();
    this.confirmPassword = document.getElementById("form").elements[2];
    this.verifyPassword();
  }

  validateForm() {
    if (password.value === confirmPassword.value) {
      super.redirectTo();
    }
    
    confirmPassword.setCustomValidity('Password doesn\'t match. Please verify.');
    return;
  }

  verifyPassword() {
    password.addEventListener('input', (event) => {
      if (event.target.value.length < 8) {
        event.target.setCustomValidity('Your password must contain at least 8 characters.');
      } else {
        event.target.setCustomValidity('');
      }
    });
    
    confirmPassword.addEventListener('input', (event) => {
      if (event.target.value.length < 8) {
        event.target.setCustomValidity('Your password confirmation also needs to be 8 characters long.');
      } else {
        event.target.setCustomValidity('');
      }
    });
  }
}

const signInUtils = {
  SignInValidator,
};

export default signInUtils;
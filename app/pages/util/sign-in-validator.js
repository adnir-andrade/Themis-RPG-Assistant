'use strict';
import formsUtils from './base-form-validator.js';

class SignInValidator extends formsUtils.FormValidator {
  constructor() {
    super();
    this.confirmPassword = document.getElementById("form").elements[2];
    this.verifyPassword();
  }

  validateForm() {
    if (!(password.value === confirmPassword.value)) {
      confirmPassword.setCustomValidity('Password doesn\'t match. Please verify.');
      return;
    }
  
    super.redirectTo();
  }

  verifyPassword() {
    password.addEventListener('input', (event) => {
      event.target.setCustomValidity(
        event.target.value.length < 8
          ? 'Your password must contain at least 8 characters.'
          : ''
      );
    });
    
    confirmPassword.addEventListener('input', (event) => {
      event.target.setCustomValidity(
        event.target.value.length < 8
          ? 'Your password confirmation also needs to be 8 characters long.'
          : ''
      );
    });
  }
}

const signInUtils = {
  SignInValidator,
};

export default signInUtils;
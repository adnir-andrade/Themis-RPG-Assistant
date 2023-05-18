'use strict';
import formsUtils from './base-form-validator.js';

class SignInValidator extends formsUtils.FormValidator {
  constructor() {
    super();
    this.confirmPassword = document.getElementById('confirmPassword');
  }

  verifyPassword() {
    console.log(super.getPassword().value);
    super.getPassword().addEventListener('invalid', (event) => {
      this.getPassword().setCustomValidity(
        'Your password must contain at least 8 characters.'
      );
      return false;
    });

    console.log('Inside first if of verifyPassword');

    if (!super.validatePasswordLength(confirmPassword.value)) {
      // this.confirmPassword.setCustomValidity(
      //   'Your password confirmation also needs to be 8 characters long.'
      // );
      console.log('Inside second if of verifyPassword');
      return false;
    }

    if (!this.doPasswordMatch(password.value, confirmPassword.value)) {
      // this.confirmPassword.setCustomValidity(
      //   'Password does not match. Please, try again.'
      // );
      console.log('Inside third if of verifyPassword');
      return false;
    }

    console.log('Inside verifyPassword, end of code');
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

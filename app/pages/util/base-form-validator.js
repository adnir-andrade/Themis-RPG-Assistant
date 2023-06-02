'use strict';
// Instalar AUTO-IMPORT no VSCODE
export class FormValidator {
  constructor() {
    this.form = document.getElementById('form');
    this.email = form.elements.email;
    this.password = document.getElementById('password');
    this.MINIMUM_LENGTH = 8;
  }

  init() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      //window.alert('A ' + event.type + ' was initiated.'); // Try to change this to something less annoying

      const emailObject = {
        email: this.email.value,
      };
      const emailJson = JSON.stringify(emailObject);

      document.cookie = `${email.value}; path=/`;
      this.validateForm();
    });
  }

  validateForm() {
    throw new Error('validateForm() must be implemented.');
  }

  verifyPassword(password) {
    throw new Error('verifyPassword() must be implemented.');
  }

  validatePasswordLength(password) {
    if (password.length < this.MINIMUM_LENGTH) {
      return false;
    }

    return true;
  }

  verifyEmail(email) {
    if (!this.isFormatValid(email) ?? false) {
      window.alert('Please, insert a valid e-mail address.');
      return false;
    }

    return true;
  }

  isFormatValid(email) {
    const isValid = (email) => {
      const CORRECT_PATTERN =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return String(email).toLowerCase().match(CORRECT_PATTERN);
    };

    return isValid(email);
  }

  redirectTo() {
    window.location.href = '/select-campaign';
  }
}

const formsUtils = {
  FormValidator,
};

export default formsUtils;

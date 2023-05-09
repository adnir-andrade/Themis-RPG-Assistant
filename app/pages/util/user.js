"use strict";
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const users = [];

function getEmail() {
  return this.email;
}

function comparePassword(password) {
  return this.password === password;
}

function addUser(user) {
  this.users.push(user);
}

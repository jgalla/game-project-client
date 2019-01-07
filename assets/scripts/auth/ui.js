'use strict'

const store = require('../store')

const onSignUpSuccess = () => {
  $('#user-message').text('successfully signed up')
}

const onSignUpFailure = () => {
  $('#user-message').text('error on sign up')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}

'use strict'

const store = require('../store')

const onSignUpSuccess = () => {
  $('#user-message').text('successfully signed up')
}

const onSignUpFailure = () => {
  $('#user-message').text('error on sign up')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text('successfully signed in')
  store.user = responseData.user
}

const onSignInFailure = () => {
  $('#user-message').text('error on sign in')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}

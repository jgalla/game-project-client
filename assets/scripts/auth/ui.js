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
  $('#change-password').show()
  $('#sign-out-section').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-game-section').show()
}

const onSignInFailure = () => {
  $('#user-message').text('error on sign in')
}

const onChangePasswordSuccess = () => {
  $('#user-message').text('successfully changed password')
}

const onChangePasswordFailure = () => {
  $('#user-message').text('error on change password')
}

const onSignOutSuccess = () => {
  $('#user-message').text('successfully signed out')
  store.user = null
  $('#game-board').hide()
  $('#change-password').hide()
  $('#sign-out-section').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#create-game-section').hide()
}

const onSignOutFailure = () => {
  $('#user-message').text('error on sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

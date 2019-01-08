'use strict'
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$('#game-board').hide()
$('#change-password').hide()
$('#sign-out-section').hide()
$('#create-game-section').hide()

$(() => {
  $('#game-board').on('click', gameEvents.onCellClick)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#play-game').on('click', gameEvents.onIndexGame)
  $('#create-game').on('click', gameEvents.onCreateGame)
})

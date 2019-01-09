'use strict'

const store = require('../store')

// update cell with 'X' or 'O'
const updateCell = (clickId, user) => {
  $('#cell-' + clickId).text(user)
}

const highlightCells = (...cells) => {
  for (let i = 0; i < cells.length; i++) {
    $('#cell-' + cells[i]).css('background-color', 'red')
  }
}

const onDraw = () => {
  $('#user-message').text('game is a draw')
}

const onIndexGameSuccess = (responseData) => {
  store.games = responseData.games
  $('#user-message').text(store.games.length + ' games played')
}

const onIndexGameFailure = () => {
  $('#user-message').text('error on start game')
}

const onCreateGameSuccess = (responseData) => {
  $('#user-message').text('create game success')
  store.currentGame = responseData.game
  $('.box').text('')
  $('.box').css('background-color', '')
  $('#game-board').show()
}

const onCreateGameFailure = () => {
  $('#user-message').text('error on create game')
}

const onUpdateGameSuccess = (responseData) => {
  // $('#user-message').text('update game success')
  store.currentGame = responseData.game
}

const onUpdateGameFailure = () => {
  $('#user-message').text('error on update game')
}

module.exports = {
  updateCell,
  highlightCells,
  onDraw,
  onIndexGameSuccess,
  onIndexGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}

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

const onGameMessage = (message) => {
  $('#game-message').text(message)
}

const onIndexGameSuccess = (responseData) => {
  store.games = responseData.games
  if (store.games.length === 1) {
    onGameMessage(store.games.length + ' Game Played')
  } else if (store.games.length === 0 || store.games.length > 1) {
    onGameMessage(store.games.length + ' Games Played')
  }
}

const onIndexGameFailure = () => {
  onGameMessage('Error Retreving Games')
}

const onCreateGameSuccess = (responseData) => {
  onGameMessage('Player X, Choose A Cell')
  store.currentGame = responseData.game
  $('.box').text('')
  $('.box').css('background-color', '')
  $('#game-board').show()
}

const onCreateGameFailure = () => {
  onGameMessage('Error Creating Game')
}

const onUpdateGameSuccess = (responseData) => {
  store.currentGame = responseData.game
}

const onUpdateGameFailure = () => {
  onGameMessage('Error Updating Game')
}

const onGameComplete = (winner) => {
  if (winner === 'X') {
    onGameMessage('Game Over - Player X Wins')
  } else if (winner === 'O') {
    onGameMessage('Game Over - Player O Wins')
  } else {
    onGameMessage('Game Over - Draw')
  }
}

module.exports = {
  updateCell,
  highlightCells,
  onGameMessage,
  onIndexGameSuccess,
  onIndexGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGameComplete
}

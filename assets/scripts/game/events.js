'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store')

let cells = ['', '', '', '', '', '', '', '', '']
let over = false
let user = 'X'

// callback to check if same three in a row and not equal to ''
const compareCells = function (a, b, c) {
  return a === b && b === c && a !== ''
}

// check cells array for winner
const checkWinner = () => {
  if (compareCells(cells[0], cells[1], cells[2])) {
    ui.highlightCells(0, 1, 2)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[3], cells[4], cells[5])) {
    ui.highlightCells(3, 4, 5)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[6], cells[7], cells[8])) {
    ui.highlightCells(6, 7, 8)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[0], cells[3], cells[6])) {
    ui.highlightCells(0, 3, 6)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[1], cells[4], cells[7])) {
    ui.highlightCells(1, 4, 7)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[2], cells[5], cells[8])) {
    ui.highlightCells(2, 5, 8)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[0], cells[4], cells[8])) {
    ui.highlightCells(0, 4, 8)
    ui.onGameComplete(user)
    over = true
  } else if (compareCells(cells[2], cells[4], cells[6])) {
    ui.highlightCells(2, 4, 6)
    ui.onGameComplete(user)
    over = true
  } else if (cells.every(x => x !== '')) {
    ui.highlightCells(0, 1, 2, 3, 4, 5, 6, 7, 8)
    ui.onGameComplete()
    over = true
  }
  if (over === true) { onUpdateGame(undefined, undefined, true) }
}

const onCellClick = () => {
  const clickId = event.target.id[5]
  ui.onGameMessage('')
  // check if cell is open and game is not over
  if (cells[clickId] === '' && over === false) {
    cells[clickId] = user
    onUpdateGame(clickId, user)
    ui.updateCell(clickId, user)
    checkWinner()
    user === 'X' ? user = 'O' : user = 'X'
    // notify user that game is over
  } else if (over === true) {
    ui.onGameMessage('Game Is Over - Click Create Game To Play Again')
    // notify user that cell is occupied
  } else {
    ui.onGameMessage('Cell Is Not Available, Please Try Again')
  }
}

const onIndexGame = event => {
  event.preventDefault()

  api.indexGame()
    .then(ui.onIndexGameSuccess)
    .catch(ui.onIndexGameFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  cells = ['', '', '', '', '', '', '', '', '']
  over = false
  user = 'X'

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = (cell, user, over) => {
  const id = store.currentGame.id
  const data = {
    game: {
      cell: {
        index: cell,
        value: user
      },
      over: over
    }
  }

  api.updateGame(id, data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onCellClick,
  onIndexGame,
  onCreateGame,
  onUpdateGame
}

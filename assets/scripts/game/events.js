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
    console.log(cells[0], 'won the game')
    ui.highlightCells(0, 1, 2)
    over = true
  } else if (compareCells(cells[3], cells[4], cells[5])) {
    console.log(cells[3], 'won the game')
    ui.highlightCells(3, 4, 5)
    over = true
  } else if (compareCells(cells[6], cells[7], cells[8])) {
    console.log(cells[6], 'won the game')
    ui.highlightCells(6, 7, 8)
    over = true
  } else if (compareCells(cells[0], cells[3], cells[6])) {
    console.log(cells[0], 'won the game')
    ui.highlightCells(0, 3, 6)
    over = true
  } else if (compareCells(cells[1], cells[4], cells[7])) {
    console.log(cells[1], 'won the game')
    ui.highlightCells(1, 4, 7)
    over = true
  } else if (compareCells(cells[2], cells[5], cells[8])) {
    console.log(cells[2], 'won the game')
    ui.highlightCells(2, 5, 8)
    over = true
  } else if (compareCells(cells[0], cells[4], cells[8])) {
    console.log(cells[0], 'won the game')
    ui.highlightCells(0, 4, 8)
    over = true
  } else if (compareCells(cells[2], cells[4], cells[6])) {
    console.log(cells[2], 'won the game')
    ui.highlightCells(2, 4, 6)
    over = true
  } else if (cells.every(x => x !== '')) {
    console.log('draw')
    over = true
  }
}

const onCellClick = () => {
  let clickId = event.target.id[5]
  if (cells[clickId] === '' && over === false) {
    cells[clickId] = user
    onUpdateGame(clickId, user)
    console.log(cells)
    ui.updateCell(clickId, user)
    checkWinner()
    user === 'X' ? user = 'O' : user = 'X'
  } else if (over === true) {
    console.log('game is over')
  } else {
    console.log('cell is not available, choose again')
  }
}

const onIndexGame = event => {
  event.preventDefault()

  api.indexGame()
    .then(ui.onIndexGameSuccess)
    .catch(ui.onIndexGameFailure)
  // $('form').trigger('reset')
}

const onCreateGame = event => {
  event.preventDefault()
  cells = ['', '', '', '', '', '', '', '', '']

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = (cell, user, over) => {
  // event.preventDefault()
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

const ui = require('./ui.js')

const cells = ['', '', '', '', '', '', '', '', '']
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
    over = true
  } else if (compareCells(cells[3], cells[4], cells[5])) {
    console.log(cells[3], 'won the game')
    over = true
  } else if (compareCells(cells[6], cells[7], cells[8])) {
    console.log(cells[6], 'won the game')
    over = true
  } else if (compareCells(cells[0], cells[3], cells[6])) {
    console.log(cells[0], 'won the game')
    over = true
  } else if (compareCells(cells[1], cells[4], cells[7])) {
    console.log(cells[1], 'won the game')
    over = true
  } else if (compareCells(cells[2], cells[5], cells[8])) {
    console.log(cells[2], 'won the game')
    over = true
  } else if (compareCells(cells[0], cells[4], cells[8])) {
    console.log(cells[0], 'won the game')
    over = true
  } else if (compareCells(cells[2], cells[4], cells[6])) {
    console.log(cells[2], 'won the game')
    over = true
  } else if (cells.every(x => x !== '')) {
    console.log('draw')
    over = true
  }
}

const onCellClick = () => {
  let clickId = event.target.id[5]
  cells[clickId] = user
  console.log(cells)
  ui.updateCell(clickId, user)
  checkWinner()
  user === 'X' ? user = 'O' : user = 'X'
}

module.exports = {
  onCellClick
}

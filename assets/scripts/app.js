'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const cells = ['', '', '', '', '', '', '', '', '']
  let over = false
  let user = 'X'

  const compare = function (a, b, c) {
    return a === b && b === c && a !== ''
  }

  for (let i = 0; i < cells.length; i++) {
    $('#cell-' + i).on('click', () => {
      cells[i] = user
      $('#cell-' + i).append(user)
      if (user === 'X') {
        user = 'O'
      } else {
        user = 'X'
      }
      console.log(cells)

      if (compare(cells[0], cells[1], cells[2])) {
        console.log(cells[0], 'won the game')
        over = true
      } else if (compare(cells[3], cells[4], cells[5])) {
        console.log(cells[3], 'won the game')
        over = true
      } else if (compare(cells[6], cells[7], cells[8])) {
        console.log(cells[6], 'won the game')
        over = true
      } else if (compare(cells[0], cells[3], cells[6])) {
        console.log(cells[0], 'won the game')
        over = true
      } else if (compare(cells[1], cells[4], cells[7])) {
        console.log(cells[1], 'won the game')
        over = true
      } else if (compare(cells[2], cells[5], cells[8])) {
        console.log(cells[2], 'won the game')
        over = true
      } else if (compare(cells[0], cells[4], cells[8])) {
        console.log(cells[0], 'won the game')
        over = true
      } else if (compare(cells[2], cells[4], cells[6])) {
        console.log(cells[2], 'won the game')
        over = true
      } else if (cells.every(x => x !== '')) {
        console.log('draw')
        over = true
      }
    })
  }
})

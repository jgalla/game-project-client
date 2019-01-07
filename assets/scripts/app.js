'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const cells = ['','','','','','','','','']

  let user = 'X'

  for (let i = 0; i < cells.length; i++) {
    $('#cell-' + i).on('click', () => {
      cells[i] = user
      $('#cell-' + i).append(user)
      if (user === 'X') {
        user = 'O'
      } else {
        user = 'X'
      }

      console.log(user)
      console.log(cells)
    })
  }
})

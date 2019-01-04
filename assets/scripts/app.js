'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const gameCells = ['','','','','','','','','']

  for (let i = 0; i < gameCells.length; i++) {
    $('#cell-' + i).on('click', () => {
      gameCells[i] = 'test'
      console.log(gameCells)
    })
  }
})

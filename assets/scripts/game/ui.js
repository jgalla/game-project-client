const store = require('../store')

// update cell with 'X' or 'O'
const updateCell = (clickId, user) => {
  $('#cell-' + clickId).text(user)
}

const highlightCells = (...cells) => {
  for (let i = 0; i < cells.length; i++) {
    $('#cell-' + cells[i]).css('background-color', 'red')
    console.log(cells[i])
  }
}

const onIndexGameSuccess = (responseData) => {
  $('#user-message').text('start game success')
  store.games = responseData.games
  console.log('index store: ', store)
}

const onIndexGameFailure = () => {
  $('#user-message').text('error on start game')
}

const onCreateGameSuccess = (responseData) => {
  $('#user-message').text('create game success')
  store.currentGame = responseData.game
  $('.box').text('')
  $('.box').css('background-color', '')
  console.log('create store: ', store)
}

const onCreateGameFailure = () => {
  $('#user-message').text('error on create game')
}

const onUpdateGameSuccess = (responseData) => {
  $('#user-message').text('update game success')
  store.currentGame = responseData.game
  console.log('update store: ', store)
}

const onUpdateGameFailure = () => {
  $('#user-message').text('error on update game')
}

module.exports = {
  updateCell,
  highlightCells,
  onIndexGameSuccess,
  onIndexGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}

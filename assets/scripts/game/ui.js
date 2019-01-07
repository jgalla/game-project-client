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

module.exports = {
  updateCell,
  highlightCells
}

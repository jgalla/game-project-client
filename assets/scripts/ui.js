const updateCell = (clickId, user) => {
  $('#cell-' + clickId).text(user)
}

module.exports = {
  updateCell
}

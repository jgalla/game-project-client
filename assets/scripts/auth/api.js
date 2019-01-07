'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
}

const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'user name must be provided'],
    }
  })
  
  module.exports = mongoose.model('userData', userData) 
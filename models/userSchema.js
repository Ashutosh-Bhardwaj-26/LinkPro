const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    _id:{
      type: String
    },
    name: {
      type: String,
      required: [true, 'user name must be provided'],
    }
  })
  
module.exports = mongoose.model('userData', userData) 
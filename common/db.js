const mongoose = require('mongoose')

const url = 'mongodb://localhost/movieServer'

mongoose.connect(url,{ useNewUrlParser: true })

module.exports = mongoose;
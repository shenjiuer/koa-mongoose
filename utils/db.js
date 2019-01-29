const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/database'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongoose connected')
})
mongoose.connection.on('error', () => {
  console.log('mongoose connect error')
})
mongoose.connection.on('disconnection', () => {
  console.log('mongoose disconnection')
})
module.exports = mongoose
require('dotenv')

module.exports = {
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  }
}
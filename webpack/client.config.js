const path = require('path')

module.exports = {
  entry: ['./src/client/index.jsx'],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'client.js'
  }
}

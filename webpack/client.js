const path = require('path')

module.exports = {
  entry: {
    bundle: ['./src/client/index.jsx']
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'assets'),
    filename: '[name].js'
  }
}
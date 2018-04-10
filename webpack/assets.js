const path = require('path')

module.exports = {
  entry: {
    bundle: ['./src/front/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'assets'),
    filename: '[name].js'
  }
}

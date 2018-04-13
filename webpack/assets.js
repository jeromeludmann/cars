const path = require('path')

module.exports = {
  entry: {
    bundle: ['./src/front/index.jsx']
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'assets'),
    filename: '[name].js'
  },
  devtool: 'cheap-eval-source-map'
}

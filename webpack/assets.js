const path = require('path')
const { js, ts, css } = require('./rules')

module.exports = {
  entry: {
    bundle: ['./src/front/index.jsx']
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'assets'),
    filename: '[name].js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    alias: {
      '@front': path.resolve(__dirname, '..', 'src', 'front')
    }
  },
  module: {
    rules: [js, ts, css]
  },
  devtool: 'source-map'
}

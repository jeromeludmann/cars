const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Config: path.resolve(__dirname, '..', 'config'),
      Client: path.resolve(__dirname, '..', 'src', 'client'),
      Server: path.resolve(__dirname, '..', 'src', 'server')
    }
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 500
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

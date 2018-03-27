const path = require('path')

const clientConfig = require('./client.config')
const serverConfig = require('./server.config')

const sharedConfig = {
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

module.exports = [
  { ...sharedConfig, ...clientConfig },
  { ...sharedConfig, ...serverConfig }
]

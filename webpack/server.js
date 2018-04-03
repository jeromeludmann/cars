const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server/server.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()]
}

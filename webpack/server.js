const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = service => ({
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    bundle: [`./src/server/${service}/index.js`]
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'server', service),
    filename: '[name].js'
  }
})

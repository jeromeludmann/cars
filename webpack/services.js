const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = serviceName => ({
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    bundle: [`./src/services/${serviceName}/index.js`]
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'services', serviceName),
    filename: '[name].js'
  }
})

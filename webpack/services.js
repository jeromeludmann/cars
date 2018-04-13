const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = serviceName => ({
  target: 'node',
  externals: [nodeExternals()],
  entry: `./src/back/${serviceName}/index.ts`,
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'services'),
    filename: `${serviceName}.bundle.js`
  },
  devtool: 'source-map'
})

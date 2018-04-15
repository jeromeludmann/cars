const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { ts } = require('./rules')

module.exports = serviceName => ({
  target: 'node',
  externals: [nodeExternals()],
  entry: `./src/back/${serviceName}/index.ts`,
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'services'),
    filename: `${serviceName}.bundle.js`
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@rest': path.resolve(__dirname, '..', 'src', 'back', 'rest'),
      '@graphql': path.resolve(__dirname, '..', 'src', 'back', 'graphql'),
      '@ssr': path.resolve(__dirname, '..', 'src', 'back', 'ssr'),
      '@common': path.resolve(__dirname, '..', 'src', 'back', 'common')
    }
  },
  module: {
    rules: [ts]
  },
  devtool: 'source-map'
})

const assets = require('./assets')
const services = require('./services')

const common = {
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 500
  }
}

module.exports = [
  { ...common, ...assets },
  { ...common, ...services('rest') },
  { ...common, ...services('graphql') },
  { ...common, ...services('ssr') }
]

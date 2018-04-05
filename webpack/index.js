const common = require('./common')
const client = require('./client')
const services = require('./services')

module.exports = [
  { ...common, ...client },
  { ...common, ...services('api') },
  { ...common, ...services('ssr') }
]

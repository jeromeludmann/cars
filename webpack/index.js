const common = require('./common')
const client = require('./client')
const server = require('./server')

module.exports = [{ ...common, ...client }, { ...common, ...server }]

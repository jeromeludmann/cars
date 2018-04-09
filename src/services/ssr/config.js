export default {
  development: {
    port: 3307
  },
  production: {}
}[process.env.NODE_ENV]

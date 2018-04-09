export default {
  development: {
    port: 3306
  },
  production: {}
}[process.env.NODE_ENV]

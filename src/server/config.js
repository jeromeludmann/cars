import development from 'Config/development.json'
import production from 'Config/production.json'

export default {
  development,
  production
}[process.env.NODE_ENV]

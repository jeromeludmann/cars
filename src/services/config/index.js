import development from './profiles/development.json'
import production from './profiles/production.json'

export default {
  development,
  production
}[process.env.NODE_ENV]

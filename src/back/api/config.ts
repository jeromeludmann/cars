export interface Config {
  port: number
  db: {
    host: string
    port: number
    name: string
  }
}

const config: Config = {
  port: 3306,
  db: {
    host: 'mongo',
    port: 27017,
    name: 'cars'
  }
}

export default config

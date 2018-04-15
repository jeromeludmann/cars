const config: Config = {
  rest: {
    port: 3006
  },
  graphql: {
    port: 3007
  },
  ssr: {
    port: 4008
  },
  db: {
    host: 'mongo',
    port: 27017,
    name: 'cars'
  }
}

export default config

interface Config {
  rest: { port: number }
  graphql: { port: number }
  ssr: { port: number }
  db: { host: string; port: number; name: string }
}

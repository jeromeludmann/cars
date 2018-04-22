interface Config {
  rest: { port: number }
  graphql: { port: number; graphiql: boolean }
  ssr: { port: number }
  db: { host: string; port: number; name: string }
}

export const config: Config = {
  rest: {
    port: 3006
  },
  graphql: {
    port: 3007,
    graphiql: true
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

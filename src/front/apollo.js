import ApolloClient from 'apollo-boost'
import config from '@front/config'

export default new ApolloClient({
  uri: config.graphqlUri
})

import ApolloClient from 'apollo-boost'
import config from '@front/HelloWorld/apollo/config'

export default new ApolloClient({
  uri: config.graphqlUri
})

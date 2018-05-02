import React from 'react'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '@front/HelloWorld/apollo/client'
import CarListQuery from '@front/HelloWorld/apollo/CarListQuery'

export default () => (
  <ApolloProvider client={apolloClient}>
    <CarListQuery name='Cars' />
  </ApolloProvider>
)

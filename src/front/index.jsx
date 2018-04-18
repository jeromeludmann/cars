import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '@front/apollo'
import HelloJS from '@front/HelloWorld/javascript'
import HelloTS from '@front/HelloWorld/typescript'
import HelloApollo from '@front/HelloWorld/apollo'

render(
  <ApolloProvider client={apolloClient}>
    <div>
      <HelloJS name='JavaScript' />
      <HelloTS name='TypeScript' />
      <HelloApollo />
    </div>
  </ApolloProvider>,
  document.getElementById('react-root-container')
)

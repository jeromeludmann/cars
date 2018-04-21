import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CarList from '@front/HelloWorld/apollo/CarList'

export default graphql(gql`
  {
    cars {
      name
      color
    }
  }
`)(({ name, data: { error, loading, cars } }) => {
  if (error) {
    return <code>{JSON.stringify(error)}</code>
  }

  if (loading) {
    return <div>Loading cars...</div>
  }

  if (!cars || cars.length === 0) {
    return (
      <div>
        No cars to display. Run <code>./reset-db</code> and retry.
      </div>
    )
  }

  return <CarList cars={cars} />
})

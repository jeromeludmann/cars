import React from 'react'
import { title, emphased } from '@front/HelloWorld/style.css'
import CarListQuery from '@front/HelloWorld/apollo'

export default ({ name = 'World' }) => (
  <h1 className={title}>
    Hello <strong className={emphased}>{name}</strong>!
    <CarListQuery />
  </h1>
)

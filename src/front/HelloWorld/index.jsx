import React from 'react'
import { title, emphased } from '@front/HelloWorld/style.scss'

export default ({ name = 'World' }) => (
  <h1 className={title}>
    Hello <strong className={emphased}>{name}</strong>!
  </h1>
)

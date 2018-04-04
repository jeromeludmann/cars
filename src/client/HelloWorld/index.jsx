import React from 'react'
import { title, shout } from './style.css'

export default ({ name = 'world' }) => (
  <h1 className={title}>
    Hello <strong className={shout}>{name}</strong>!
  </h1>
)

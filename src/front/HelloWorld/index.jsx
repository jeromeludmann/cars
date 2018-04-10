import React from 'react'
import { title, emphased } from './style.css'

export default ({ name = 'World' }) => (
  <h1 className={title}>
    Hello <strong className={emphased}>{name}</strong>!
  </h1>
)

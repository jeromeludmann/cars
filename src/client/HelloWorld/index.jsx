import React from 'react'
import { HelloWorld } from './style/styled-components.js'
import { bolder, lighter } from './style/css-modules.css'

export default ({ name = 'World' }) => (
  <HelloWorld>
    <h1>
      Hello <strong className={bolder}>{name}</strong>!
    </h1>

    <p>
      I am a <em className={lighter}>dumb</em> component
    </p>
  </HelloWorld>
)

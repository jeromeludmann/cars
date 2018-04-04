import React from 'react'
import { render } from 'react-dom'

import HelloWorld from 'Client/HelloWorld'
import { part } from 'Client/style.css'

render(
  <section className={part}>
    <HelloWorld name='You' />
  </section>,
  document.getElementById('react-root-container')
)

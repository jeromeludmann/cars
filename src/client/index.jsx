import React from 'react'
import { render } from 'react-dom'

import HelloWorld from 'Client/HelloWorld'

render(
  <HelloWorld name='You' />,
  document.getElementById('react-root-container')
)

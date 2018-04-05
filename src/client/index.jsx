import React from 'react'
import { render } from 'react-dom'

import HelloWorld from 'Cars/client/HelloWorld'

render(
  <div>
    <HelloWorld />,
    <HelloWorld name='You' />
  </div>,
  document.getElementById('react-root-container')
)

import React from 'react'
import { render } from 'react-dom'

import HelloWorld from 'Cars/client/HelloWorld'

render(
  <HelloWorld name='You' />,
  document.getElementById('react-root-container')
)

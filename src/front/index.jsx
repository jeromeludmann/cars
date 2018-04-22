import React from 'react'
import { render } from 'react-dom'
import HelloWorld from '@front/HelloWorld'

render(
  <HelloWorld name='You' />,
  document.getElementById('react-root-container')
)

import React from 'react'
import { render } from 'react-dom'
import HelloWorld from '@front/HelloWorld'

render(
  <div>
    <HelloWorld name='You' />
  </div>,
  document.getElementById('react-root-container')
)

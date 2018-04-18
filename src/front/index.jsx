import React from 'react'
import { render } from 'react-dom'

import HelloWorldJS from '@front/HelloWorld/js'
import HelloWorldTS from '@front/HelloWorld/ts'

render(
  <div>
    <HelloWorldJS name='JavaScript' />
    <HelloWorldTS name='TypeScript' />
  </div>,
  document.getElementById('react-root-container')
)

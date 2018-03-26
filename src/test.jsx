import React from 'react'
import { render } from 'react-dom'

const Hello = ({ name }) => <div>Hello {name}</div>

render(<Hello name='world' />, document.getElementById('root'))

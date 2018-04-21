import React from 'react'

export default ({ cars = [] }) => (
  <div>
    <ul>
      {cars.map(({ name, color }) => (
        <li key={name}>
          {name} is a {color} car
        </li>
      ))}
    </ul>
  </div>
)

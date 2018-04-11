import React from 'react'
const { title, emphased } = require('./style.css')

interface Props {
  name?: string
}

export default class HelloWorld extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    name: 'World'
  }

  public render() {
    return (
      <h1 className={title}>
        Hello <strong className={emphased}>{this.props.name}</strong>!
      </h1>
    )
  }
}

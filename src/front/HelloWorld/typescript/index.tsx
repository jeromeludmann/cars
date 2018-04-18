import React from 'react'
import { Title, Emphased } from '@front/HelloWorld/typescript/style'

interface Props {
  name?: string
}

export default class HelloWorld extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    name: 'World'
  }

  public render() {
    return (
      <Title>
        Hello <Emphased>{this.props.name}</Emphased>!
      </Title>
    )
  }
}

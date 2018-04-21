import React from 'react'
import styled from 'styled-components'

interface Props {
  name?: string
}

const color = 'indigo'
const fontFamily = '"Helvetica Neue", Helvetica, sans-serif'

export const Title = styled.h1`
  font-size: 1.6em;
  font-family: ${fontFamily};
  color: ${color};
  font-weight: lighter;
`

export const Emphased = styled.strong`
  font-weight: bolder;
`

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

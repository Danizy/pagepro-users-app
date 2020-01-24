import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${(props: ButtonProps): string =>
    props.secondary ? '#075394' : 'white'};
  border: 2px solid black;
  color: ${(props: ButtonProps): string =>
    props.secondary ? 'white' : 'black'};
  padding: 0.5em 1em;
  align-self: stretch;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
  }
`

type ButtonProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void
  secondary?: boolean
}

const Button: React.FC<ButtonProps> = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
)

export default Button

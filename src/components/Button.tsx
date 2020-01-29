import React from 'react'
import styled from 'styled-components'
import mainTheme from '../constants/theme'

const StyledButton = styled.button`
  background: ${(props: ButtonProps): string =>
    props.secondary ? mainTheme.secondaryColor : 'white'};
  border: ${mainTheme.borderThin};
  color: ${(props: ButtonProps): string =>
    props.secondary ? 'white' : 'black'};
  padding: 0.5em 1em;
  align-self: stretch;
  box-shadow: ${mainTheme.shadow};

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

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #075394;
  border: 2px solid black;
  color: white;
  height: 60px;
  width: 60px;
  border-radius: 60px;

  &:hover {
    cursor: pointer;
  }
`

const AddButtonContent = styled.span`
  font-size: 50px;
`

type AddButtonProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void
}

const CustomButton: React.FC<AddButtonProps> = props => (
  <StyledButton {...props}>
    <AddButtonContent>{props.children}</AddButtonContent>
  </StyledButton>
)

export default CustomButton

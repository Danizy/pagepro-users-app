import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const ItemContainer = styled.div`
  border: solid black 3px;
  flex-basis: 350px;
  margin: 20px 35px;
  height: 400px;
  padding: 20px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const FlexParagraph = styled.p`
  flex: 1;
`

type UserListItemProps = {
  header?: string
  email?: string
  phone?: string
  site?: string
  content?: string
  buttonText?: string
}

const UserListItem: React.FC<UserListItemProps> = ({
  header,
  email,
  phone,
  site,
  content,
  buttonText,
}) => (
  <ItemContainer>
    <h2>{header}</h2>
    <a href="#">{email}</a>
    <a href="#">{phone}</a>
    <a href="#">{site}</a>
    <FlexParagraph>{content}</FlexParagraph>
    <Button onClick={(): void => console.log('aje')}>
      <h2>{buttonText}</h2>
    </Button>
  </ItemContainer>
)

export default UserListItem

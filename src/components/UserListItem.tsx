import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IUser } from '../models/user'

const ItemContainer = styled.div`
  border: solid black 3px;
  flex-basis: 300px;
  margin: 20px 35px;
  height: 400px;
  padding: 20px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const DBlock = styled.div`
  display: block;
`

const FlexParagraph = styled.p`
  flex: 1;
  font-weight: bold;
  margin-top: 0px;
`

const NoMarginParagraph = styled.p`
  margin: 0px;
`

const ContactDiv = styled.div`
  margin-bottom: 25px;
`

const StyledLink = styled(Link)`
  background: 'white';
  border: 2px solid black;
  color: 'black';
  padding: 0.5em 1em;
  align-self: stretch;
  text-align: center;
  text-decoration: none;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.75);

  &:visited {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`

type UserListItemProps = {
  user: IUser
  buttonText: string
}

const UserListItem: React.FC<UserListItemProps> = ({ user, buttonText }) => {
  const { name, id, email, phone, website } = user

  return (
    <ItemContainer>
      <h2>{name}</h2>
      <ContactDiv>
        <DBlock>{email}</DBlock>
        <DBlock>{phone}</DBlock>
        <DBlock>{website}</DBlock>
      </ContactDiv>
      <NoMarginParagraph>{user.company.name}</NoMarginParagraph>
      <NoMarginParagraph>{user.company.catchPhrase}</NoMarginParagraph>
      <FlexParagraph>{user.company.bs}</FlexParagraph>
      <StyledLink to={`users/${id}`}>
        <h2>{buttonText}</h2>
      </StyledLink>
    </ItemContainer>
  )
}

export default UserListItem

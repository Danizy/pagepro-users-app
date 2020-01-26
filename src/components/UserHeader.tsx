import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import AddButton from './AddButton'

const HeaderContainer = styled.div`
  padding-top: 20px;
  height: 100px;
  display: flex;
  align-items: center;
`

const UserNameContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 30px;
  font-weight: bold;
`

const UserHeader: React.FC = () => {
  const userName = useSelector<RootState, string | undefined>(
    state => state.usersReducer.selectedUser?.name
  )
  return (
    <HeaderContainer>
      <BackButton></BackButton>
      <UserNameContainer>{userName}</UserNameContainer>
      <AddButton onClick={(): void => console.log('opa')} />
    </HeaderContainer>
  )
}

export default UserHeader

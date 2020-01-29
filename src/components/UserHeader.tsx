import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import CustomButton from './CustomButton'
import { Route, Switch } from 'react-router-dom'

const HeaderContainer = styled.div`
  padding-top: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
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

type UserHeaderPropr = {
  onAddClick: () => void
  onRemoveClick: () => void
}

const UserHeader: React.FC<UserHeaderPropr> = ({
  onAddClick,
  onRemoveClick,
}) => {
  const userName = useSelector<RootState, string | undefined>(
    state => state.usersReducer.selectedUser?.name
  )
  return (
    <HeaderContainer>
      <BackButton></BackButton>
      <UserNameContainer>{userName}</UserNameContainer>
      <Switch>
        <Route exact path={'/users/:userId'}>
          <CustomButton onClick={onAddClick}>+</CustomButton>
        </Route>
        <Route exact path={'/users/:userId/:postId'}>
          <CustomButton onClick={onRemoveClick}>-</CustomButton>
        </Route>
      </Switch>
    </HeaderContainer>
  )
}

export default UserHeader

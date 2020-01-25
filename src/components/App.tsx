import React, { useEffect } from 'react'
import styled from 'styled-components'
import UserListItem from './UserListItem'
import { getUsers } from '../actions/users-actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { IUser } from '../models/user'

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
`

const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  const users = useSelector<RootState, IUser[]>(
    state => state.usersReducer.users
  )

  return (
    <MainWrapper>
      {users.map(user => (
        <UserListItem key={user.id}></UserListItem>
      ))}
    </MainWrapper>
  )
}

export default App

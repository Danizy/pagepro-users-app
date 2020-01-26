import React, { useEffect } from 'react'
import UserListItem from './UserListItem'
import { getUsers } from '../actions/users-actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { IUser } from '../models/user'
import styled from 'styled-components'
import LoadingIndicator from './LoadingIndicator'

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
`

const UserList: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector<RootState, IUser[]>(
    state => state.usersReducer.users
  )
  const usersLoading = useSelector<RootState, boolean>(
    state => state.usersReducer.isLoading
  )

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const list = users.map(user => (
    <UserListItem key={user.id} user={user} buttonText="Details"></UserListItem>
  ))

  return <MainWrapper>{usersLoading ? <LoadingIndicator /> : list}</MainWrapper>
}

export default UserList

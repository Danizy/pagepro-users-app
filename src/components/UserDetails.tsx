import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserHeader from './UserHeader'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { IUser } from '../models/user'
import { selectUser } from '../actions/users-actions'

interface RouteParams {
  userId: string
}

const UserDetails: React.FC = () => {
  const { userId } = useParams<RouteParams>()
  const user = useSelector<RootState, IUser | undefined>(state =>
    state.usersReducer.users.find(user => user.id === +userId)
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (user !== undefined) dispatch(selectUser(user))
  }, [userId, user, dispatch])

  return (
    <div>
      <UserHeader />
      <div>
        <p>Dziwko {userId}</p>
      </div>
    </div>
  )
}

export default UserDetails

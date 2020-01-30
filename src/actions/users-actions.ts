import {
  UsersActionTypes,
  GET_USERS,
  GET_USERS_FINISHED,
  GET_USERS_FAILED,
  GET_USER,
  GET_USER_FINISHED,
  GET_USER_FAILED,
} from './users-types'
import { User } from '../models/user'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { fetchUsers, fetchUser } from '../services/users-service'
import { IUsersState } from '../reducers/users-reducer'

const getUsersFinished = (users: User[]): UsersActionTypes => ({
  type: GET_USERS_FINISHED,
  payload: users,
})

const getUsersFailed = (): UsersActionTypes => ({
  type: GET_USERS_FAILED,
})

export const getUsers = (): ThunkAction<
  void,
  IUsersState,
  null,
  UsersActionTypes
> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: GET_USERS })
    try {
      const users = await fetchUsers()
      dispatch(getUsersFinished(users))
    } catch (error) {
      getUsersFailed()
    }
  }
}

const getUserFinished = (user: User): UsersActionTypes => ({
  type: GET_USER_FINISHED,
  payload: user,
})

const getUserFailed = (): UsersActionTypes => ({
  type: GET_USER_FAILED,
})

export const getUser = (
  userId: number
): ThunkAction<void, IUsersState, null, UsersActionTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: GET_USER })
    try {
      const user = await fetchUser(userId)
      dispatch(getUserFinished(user))
    } catch (error) {
      dispatch(getUserFailed())
    }
  }
}

import {
  UsersActionTypes,
  GET_USERS,
  GET_USERS_FINISHED,
  GET_USERS_FAILED,
  SELECT_USER,
} from './users-types'
import { User, IUser } from '../models/user'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { fetchUsers } from '../services/users-service'
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

export const selectUser = (user: IUser): UsersActionTypes => ({
  type: SELECT_USER,
  payload: user,
})

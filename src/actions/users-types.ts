import { User } from '../models/user'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_FINISHED = 'GET_USERS_FINISHED'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'
export const SELECT_USER = 'SELECT_USER'

interface GetUsersAction {
  type: typeof GET_USERS
}

interface GetUsersFinishedAction {
  type: typeof GET_USERS_FINISHED
  payload: User[]
}

interface GetUsersFailedAction {
  type: typeof GET_USERS_FAILED
}

interface SelectUserAction {
  type: typeof SELECT_USER
  payload: User
}

export type UsersActionTypes =
  | GetUsersAction
  | GetUsersFailedAction
  | GetUsersFinishedAction
  | SelectUserAction

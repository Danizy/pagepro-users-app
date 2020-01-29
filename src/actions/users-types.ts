import { User, IUser } from '../models/user'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_FINISHED = 'GET_USERS_FINISHED'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'
export const GET_USER = 'GET_USER'
export const GET_USER_FINISHED = 'GET_USER_FINISHED'
export const GET_USER_FAILED = 'GET_USER_FAILED'

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

interface GetUserAction {
  type: typeof GET_USER
  payload: number
}

interface GetUserActionFinished {
  type: typeof GET_USER_FINISHED
  payload: IUser
}

interface GetUserActionFailed {
  type: typeof GET_USER_FAILED
}

export type UsersActionTypes =
  | GetUsersAction
  | GetUsersFailedAction
  | GetUsersFinishedAction
  | GetUserAction
  | GetUserActionFinished
  | GetUserActionFailed

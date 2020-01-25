import { User } from '../models/user'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_FINISHED = 'GET_USERS_FINISHED'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'

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

export type UsersActionTypes =
  | GetUsersAction
  | GetUsersFailedAction
  | GetUsersFinishedAction

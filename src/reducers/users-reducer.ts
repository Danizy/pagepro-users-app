import { User } from '../models/user'
import {
  UsersActionTypes,
  GET_USERS,
  GET_USERS_FINISHED,
  GET_USERS_FAILED,
} from '../actions/users-types'

export interface IUsersState {
  readonly users: User[]
  readonly isLoading: boolean
  readonly error: boolean
}

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: false,
}

const usersReducer = (
  state = initialState,
  action: UsersActionTypes
): IUsersState => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, isLoading: true, error: false }
    case GET_USERS_FINISHED:
      return { ...state, isLoading: false, users: action.payload }
    case GET_USERS_FAILED:
      return { ...state, isLoading: false, error: true }
    default:
      return state
  }
}

export default usersReducer

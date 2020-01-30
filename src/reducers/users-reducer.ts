import { User } from '../models/user'
import {
  UsersActionTypes,
  GET_USERS,
  GET_USERS_FINISHED,
  GET_USERS_FAILED,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_FINISHED,
} from '../actions/users-types'

export interface IUsersState {
  readonly users: User[]
  readonly isLoading: boolean
  readonly error: boolean
  readonly selectedUser: User | null
}

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: false,
  selectedUser: null,
}

const usersReducer = (
  state = initialState,
  action: UsersActionTypes
): IUsersState => {
  switch (action.type) {
    case GET_USERS:
    case GET_USER:
      return { ...state, isLoading: true, error: false }
    case GET_USERS_FINISHED:
      return { ...state, isLoading: false, users: action.payload }
    case GET_USERS_FAILED:
    case GET_USER_FAILED:
      return { ...state, isLoading: false, error: true }
    case GET_USER_FINISHED:
      return { ...state, selectedUser: action.payload, isLoading: false }
    default:
      return state
  }
}

export default usersReducer

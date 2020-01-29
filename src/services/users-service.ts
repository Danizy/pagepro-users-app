import baseApi from './base-api'
import { User } from '../models/user'

export const fetchUsers = (): Promise<User[]> => baseApi.get<User[]>('users')

export const fetchUser = (userId: number): Promise<User> =>
  baseApi.get<User>(`users/${userId}`)

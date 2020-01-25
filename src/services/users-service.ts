import baseApi from './base-api'
import { User } from '../models/user'

export const fetchUsers = (): Promise<User[]> => baseApi.get<User[]>('users')

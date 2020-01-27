import baseApi from './base-api'
import { IPost } from '../models/post'

export const fetchPosts = (userId: number): Promise<IPost[]> =>
  baseApi.get<IPost[]>(`posts?userId=${userId}`)

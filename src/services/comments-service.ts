import baseApi from './base-api'
import { Comment } from '../models/comment'

export const fetchComments = (postId: number): Promise<Comment[]> =>
  baseApi.get<Comment[]>(`comments?postId=${postId}`)

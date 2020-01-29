import baseApi from './base-api'
import { Comment, IComment } from '../models/comment'
import { IPostAddResponse } from '../models/post-add-response'

export const fetchComments = (postId: number): Promise<Comment[]> =>
  baseApi.get<Comment[]>(`comments?postId=${postId}`)

export const addComment = (comment: IComment): Promise<IPostAddResponse> =>
  baseApi.post<IPostAddResponse>(`comments`, JSON.stringify(comment))

import baseApi from './base-api'
import { IPost } from '../models/post'
import { IPostAddResponse } from '../models/post-add-response'

export const fetchPosts = (userId: number): Promise<IPost[]> =>
  baseApi.get<IPost[]>(`posts?userId=${userId}`)

export const deletePost = (postId: number): Promise<any> =>
  baseApi.delete<any>(`posts/${postId}`)

export const addPost = (post: IPost): Promise<IPostAddResponse> =>
  baseApi.post<IPostAddResponse>(`posts`, JSON.stringify(post))

export const fetchPost = (postId: number): Promise<IPost> =>
  baseApi.get<IPost>(`posts/${postId}`)

import { Post } from '../models/post'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_FINISHED = 'GET_POSTS_FINISHED'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'

interface GetPostsAction {
  type: typeof GET_POSTS
}

interface GetPostsFinishedAction {
  type: typeof GET_POSTS_FINISHED
  payload: Post[]
}

interface GetPostsFailedAction {
  type: typeof GET_POSTS_FAILED
}

export type PostsActionTypes =
  | GetPostsAction
  | GetPostsFinishedAction
  | GetPostsFailedAction

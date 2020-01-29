import { Post, IPost } from '../models/post'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_FINISHED = 'GET_POSTS_FINISHED'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_POST_FAILED = 'DELETE_POST_FAILED'
export const DELETE_POST_FINISHED = 'DELETE_POST_FINISHED'
export const CLEAN_POST_ERROR = 'CLEAN_POST_ERROR'
export const ADD_POST = 'ADD_POST'
export const ADD_POST_FINISHED = 'ADD_POST_FINISHED'
export const ADD_POST_FAILED = 'ADD_POST_FAILED'
export const GET_POST = 'GET_POST'
export const GET_POST_FINISHED = 'GET_POST_FINISHED'
export const GET_POST_FAILED = 'GET_POST_FAILED'

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

interface DeletePostAction {
  type: typeof DELETE_POST
  payload: number
}

interface DeletePostFinisedAction {
  type: typeof DELETE_POST_FINISHED
  payload: number
}

interface DeletePostFailedAction {
  type: typeof DELETE_POST_FAILED
}

interface CleanPostErrorAction {
  type: typeof CLEAN_POST_ERROR
}

interface AddPostAction {
  type: typeof ADD_POST
}

interface AddPostFailedAction {
  type: typeof ADD_POST_FAILED
}

interface AddPostFinishedAction {
  type: typeof ADD_POST_FINISHED
  payload: IPost
}

interface GetPostAction {
  type: typeof GET_POST
}

interface GetPostFailedAction {
  type: typeof GET_POST_FAILED
}

interface GetPostFinishedAction {
  type: typeof GET_POST_FINISHED
  payload: IPost
}

export type PostsActionTypes =
  | GetPostsAction
  | GetPostsFinishedAction
  | GetPostsFailedAction
  | DeletePostAction
  | DeletePostFailedAction
  | DeletePostFinisedAction
  | CleanPostErrorAction
  | AddPostAction
  | AddPostFailedAction
  | AddPostFinishedAction
  | GetPostAction
  | GetPostFailedAction
  | GetPostFinishedAction

import { Post } from '../models/post'
import {
  GET_POSTS,
  GET_POSTS_FINISHED,
  GET_POSTS_FAILED,
  PostsActionTypes,
} from '../actions/posts-types'

export interface IPostsState {
  readonly posts: Post[]
  readonly isLoading: boolean
  readonly error: boolean
}

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  error: false,
}

const postsReducer = (
  state = initialState,
  action: PostsActionTypes
): IPostsState => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, isLoading: true, error: false }
    case GET_POSTS_FINISHED:
      return { ...state, isLoading: false, posts: action.payload }
    case GET_POSTS_FAILED:
      return { ...state, isLoading: false, error: true }
    default:
      return state
  }
}

export default postsReducer

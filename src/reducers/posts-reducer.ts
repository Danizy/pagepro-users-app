import { Post, IPost } from '../models/post'
import {
  GET_POSTS,
  GET_POSTS_FINISHED,
  GET_POSTS_FAILED,
  PostsActionTypes,
  DELETE_POST,
  DELETE_POST_FINISHED,
  DELETE_POST_FAILED,
  CLEAN_POST_ERROR,
  ADD_POST,
  ADD_POST_FAILED,
  ADD_POST_FINISHED,
  GET_POST,
  GET_POST_FAILED,
  GET_POST_FINISHED,
} from '../actions/posts-types'

export interface IPostsState {
  readonly posts: Post[]
  readonly isLoading: boolean
  readonly error: boolean
  readonly isDeletingPostId: number | null
  readonly deletingError: boolean
  readonly isPostAdding: boolean
  readonly postAddingError: boolean
  readonly isPostLoading: boolean
  readonly selectedPost: IPost | null
  readonly postLoadingError: boolean
}

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  error: false,
  isDeletingPostId: null,
  deletingError: false,
  isPostAdding: false,
  postAddingError: false,
  isPostLoading: false,
  selectedPost: null,
  postLoadingError: false,
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
    case DELETE_POST:
      return { ...state, isDeletingPostId: action.payload }
    case DELETE_POST_FINISHED:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        isDeletingPostId: null,
      }
    case DELETE_POST_FAILED:
      return { ...state, isDeletingPostId: null, deletingError: true }
    case CLEAN_POST_ERROR:
      return { ...state, deletingError: false }
    case ADD_POST:
      return { ...state, isPostAdding: true, postAddingError: false }
    case ADD_POST_FAILED:
      return { ...state, isPostAdding: false, postAddingError: true }
    case ADD_POST_FINISHED:
      return {
        ...state,
        isPostAdding: false,
        posts: [...state.posts, action.payload],
      }
    case GET_POST:
      return { ...state, isPostLoading: true, postLoadingError: false }
    case GET_POST_FAILED:
      return { ...state, isPostLoading: false, postLoadingError: true }
    case GET_POST_FINISHED:
      return { ...state, isPostLoading: false, selectedPost: action.payload }
    default:
      return state
  }
}

export default postsReducer

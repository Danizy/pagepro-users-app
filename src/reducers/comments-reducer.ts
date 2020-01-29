import { Comment } from '../models/comment'
import {
  CommentsActionsTypes,
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_FINISHED,
  ADD_COMMENT,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_FINISHED,
  CLEAR_COMMENTS,
} from '../actions/comments-types'

export interface ICommentsState {
  readonly comments: Comment[]
  readonly isLoading: boolean
  readonly error: boolean
  readonly isCommentAdding: boolean
  readonly addingError: boolean
}

const initialState: ICommentsState = {
  comments: [],
  isLoading: false,
  error: false,
  isCommentAdding: false,
  addingError: false,
}

const commentsReducer = (
  state = initialState,
  action: CommentsActionsTypes
): ICommentsState => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, isLoading: true, error: false }
    case GET_COMMENTS_FINISHED:
      return { ...state, isLoading: false, comments: action.payload }
    case GET_COMMENTS_FAILED:
      return { ...state, isLoading: false, error: true }
    case ADD_COMMENT:
      return { ...state, isCommentAdding: true, addingError: false }
    case ADD_COMMENT_FAILED:
      return { ...state, isCommentAdding: false, addingError: true }
    case ADD_COMMENT_FINISHED:
      return {
        ...state,
        isCommentAdding: false,
        comments: [...state.comments, action.payload],
      }
    case CLEAR_COMMENTS:
      return {
        ...state,
        comments: [],
      }
    default:
      return state
  }
}

export default commentsReducer

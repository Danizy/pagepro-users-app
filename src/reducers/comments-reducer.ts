import { Comment } from '../models/comment'
import {
  CommentsActionsTypes,
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_FINISHED,
} from '../actions/comments-types'

export interface ICommentsState {
  readonly comments: Comment[]
  readonly isLoading: boolean
  readonly error: boolean
}

const initialState: ICommentsState = {
  comments: [],
  isLoading: false,
  error: false,
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
    default:
      return state
  }
}

export default commentsReducer

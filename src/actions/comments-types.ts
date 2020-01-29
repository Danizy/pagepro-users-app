import { IComment } from '../models/comment'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_FINISHED = 'GET_COMMENTS_FINISHED'
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_FINISHED = 'ADD_COMMENT_FINISHED'
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED'
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS'

interface GetCommentsAction {
  type: typeof GET_COMMENTS
}

interface GetCommentsFailedAction {
  type: typeof GET_COMMENTS_FAILED
}

interface GetCommentsFinishedAction {
  type: typeof GET_COMMENTS_FINISHED
  payload: IComment[]
}

interface AddCommentAction {
  type: typeof ADD_COMMENT
}

interface AddCommentFinishedAction {
  type: typeof ADD_COMMENT_FINISHED
  payload: IComment
}

interface AddCommentFailedAction {
  type: typeof ADD_COMMENT_FAILED
}

interface ClearCommentsAction {
  type: typeof CLEAR_COMMENTS
}

export type CommentsActionsTypes =
  | GetCommentsAction
  | GetCommentsFailedAction
  | GetCommentsFinishedAction
  | AddCommentAction
  | AddCommentFailedAction
  | AddCommentFinishedAction
  | ClearCommentsAction

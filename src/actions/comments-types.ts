import { IComment } from '../models/comment'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_FINISHED = 'GET_COMMENTS_FINISHED'
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED'

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

export type CommentsActionsTypes =
  | GetCommentsAction
  | GetCommentsFailedAction
  | GetCommentsFinishedAction

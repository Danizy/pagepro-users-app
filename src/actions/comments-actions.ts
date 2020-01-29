import { Comment } from '../models/comment'
import {
  CommentsActionsTypes,
  GET_COMMENTS_FINISHED,
  GET_COMMENTS_FAILED,
  GET_COMMENTS,
} from './comments-types'
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'redux'
import { fetchComments } from '../services/comments-service'
import { ICommentsState } from '../reducers/comments-reducer'

const getCommentsFinished = (comments: Comment[]): CommentsActionsTypes => ({
  type: GET_COMMENTS_FINISHED,
  payload: comments,
})

const getCommentsFailed = (): CommentsActionsTypes => ({
  type: GET_COMMENTS_FAILED,
})

export const getComments = (
  postId: number
): ThunkAction<void, ICommentsState, null, CommentsActionsTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: GET_COMMENTS })
    try {
      const comments = await fetchComments(postId)
      dispatch(getCommentsFinished(comments))
    } catch (error) {
      getCommentsFailed()
    }
  }
}

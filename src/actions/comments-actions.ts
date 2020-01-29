import { Comment } from '../models/comment'
import {
  CommentsActionsTypes,
  GET_COMMENTS_FINISHED,
  GET_COMMENTS_FAILED,
  GET_COMMENTS,
  ADD_COMMENT_FINISHED,
  ADD_COMMENT,
  CLEAR_COMMENTS,
} from './comments-types'
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'redux'
import { fetchComments } from '../services/comments-service'
import { ICommentsState } from '../reducers/comments-reducer'
import { addComment as serviceAddComment } from '../services/comments-service'

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

const addCommentFinished = (comment: Comment): CommentsActionsTypes => ({
  type: ADD_COMMENT_FINISHED,
  payload: comment,
})

const addCommentFailed = (): CommentsActionsTypes => ({
  type: GET_COMMENTS_FAILED,
})

export const addComment = (
  postId: number,
  name: string,
  email: string,
  body: string
): ThunkAction<void, ICommentsState, null, CommentsActionsTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: ADD_COMMENT })
    try {
      const comment = new Comment({ postId, name, email, body, id: 0 })
      const { id } = await serviceAddComment(comment)
      comment.id = id
      dispatch(addCommentFinished(comment))
    } catch (error) {
      addCommentFailed()
    }
  }
}

export const clearComments = {
  type: CLEAR_COMMENTS,
}

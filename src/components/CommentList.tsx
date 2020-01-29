import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments } from '../actions/comments-actions'
import { RootState } from '../store'
import { IComment } from '../models/comment'
import CommentlistElement from './CommentListElement'

interface RouteParams {
  postId: string
}

const CommentList: React.FC = () => {
  const dispatch = useDispatch()
  const { postId } = useParams<RouteParams>()

  const comments = useSelector<RootState, IComment[]>(
    state => state.commentsReducer.comments
  )

  const commentsLoading = useSelector<RootState, boolean>(
    state => state.commentsReducer.isLoading
  )

  useEffect(() => {
    if (comments.length === 0) dispatch(getComments(+postId))
  }, [dispatch, postId, comments.length])

  const list = comments.map(comment => (
    <CommentlistElement
      key={comment.id}
      commentTitle={comment.name}
      commentBody={comment.body}
      authorEmail={comment.email}
    />
  ))

  const loadingIndicator = <h2>Loading</h2>

  return <div>{commentsLoading ? loadingIndicator : list}</div>
}

export default CommentList

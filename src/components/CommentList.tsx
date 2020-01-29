import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments } from '../actions/comments-actions'
import { RootState } from '../store'
import { IComment } from '../models/comment'
import CommentlistElement from './CommentListElement'

const CommentListWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

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
    dispatch(getComments(+postId))
  }, [dispatch, postId])

  const list = comments.map(comment => (
    <CommentlistElement
      key={comment.id}
      commentTitle={comment.name}
      commentBody={comment.body}
      authorEmail={comment.email}
    />
  ))

  const loadingIndicator = <h2>Loading</h2>

  return (
    <CommentListWrapper>
      {commentsLoading ? loadingIndicator : list}
    </CommentListWrapper>
  )
}

export default CommentList

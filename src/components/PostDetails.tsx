import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getPost } from '../actions/posts-actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { IPost } from '../models/post'
import CommentList from './CommentList'

const PostDetailsWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const HideCommentsButton = styled.button`
  background: transparent;
  border: none;
  color: #075394;
  text-decoration: underline;
`

const AddCommentButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  color: #075394;
  text-decoration: underline;
`

interface RouteParams {
  postId: string
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<RouteParams>()
  const dispatch = useDispatch()
  const [commentsVisible, setCommentsVisible] = useState(false)
  useEffect(() => {
    dispatch(getPost(+postId))
  }, [dispatch, postId])

  const post = useSelector<RootState, IPost | null>(
    state => state.postsReducer.selectedPost
  )

  const toggleCommentsVisible = (): void => setCommentsVisible(state => !state)

  const postContainer = (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )

  return (
    <PostDetailsWrapper>
      {post && postContainer}
      <ButtonsContainer>
        <HideCommentsButton onClick={toggleCommentsVisible}>
          {commentsVisible ? 'Hide comments' : 'Show comments'}
        </HideCommentsButton>
        <AddCommentButton>Add comment</AddCommentButton>
      </ButtonsContainer>
      {commentsVisible && <CommentList />}
    </PostDetailsWrapper>
  )
}

export default PostDetails

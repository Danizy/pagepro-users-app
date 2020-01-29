import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getPost } from '../actions/posts-actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { IPost } from '../models/post'

const PostDetailsWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const HideCommentsButton = styled.button`
  background: transparent;
  border: none;
  color: #075394;
  text-decoration: underline;
`

const AddCommentButton = styled.button`
  margin-left: auto;
`

interface RouteParams {
  postId: string
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<RouteParams>()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost(+postId))
  }, [dispatch, postId])

  const post = useSelector<RootState, IPost | null>(
    state => state.postsReducer.selectedPost
  )

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
        <HideCommentsButton>Hide comments</HideCommentsButton>
        <AddCommentButton>aa</AddCommentButton>
      </ButtonsContainer>
    </PostDetailsWrapper>
  )
}

export default PostDetails

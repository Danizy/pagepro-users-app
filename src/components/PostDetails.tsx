import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useParams, Redirect } from 'react-router-dom'
import { getPost } from '../actions/posts-actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { IPost } from '../models/post'
import CommentList from './CommentList'
import AddCommentModal from './AddCommentModal'
import { addComment } from '../actions/comments-actions'

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
  userId: string
}

const PostDetails: React.FC = () => {
  const { postId, userId } = useParams<RouteParams>()
  const dispatch = useDispatch()
  const [commentsVisible, setCommentsVisible] = useState(false)
  const [addCommentVisible, setAddCommentVisible] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const wasDeleted = useRef(false)

  const post = useSelector<RootState, IPost | null>(
    state => state.postsReducer.selectedPost
  )

  const isPostDeleting = useSelector<RootState, number | null>(
    state => state.postsReducer.isDeletingPostId
  )

  useEffect(() => {
    if (wasDeleted.current) setRedirect(true)
    dispatch(getPost(+postId))
    if (isPostDeleting !== null) wasDeleted.current = true
  }, [dispatch, postId, isPostDeleting])

  const toggleAddComment = (): void => setAddCommentVisible(state => !state)

  const toggleCommentsVisible = (): void => setCommentsVisible(state => !state)

  const handleAddComment = (
    name: string,
    email: string,
    body: string
  ): void => {
    toggleAddComment()
    dispatch(addComment(+postId, name, email, body))
  }

  const postContainer = (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )

  return (
    <PostDetailsWrapper>
      {post && post.id === +postId ? postContainer : 'Loading'}
      <ButtonsContainer>
        <HideCommentsButton onClick={toggleCommentsVisible}>
          {commentsVisible ? 'Hide comments' : 'Show comments'}
        </HideCommentsButton>
        <AddCommentButton onClick={toggleAddComment}>
          Add comment
        </AddCommentButton>
      </ButtonsContainer>
      {commentsVisible && <CommentList />}
      {addCommentVisible && (
        <AddCommentModal
          onCancel={toggleAddComment}
          onSave={handleAddComment}
        />
      )}
      {redirect && <Redirect to={`/users/${userId}`} />}
    </PostDetailsWrapper>
  )
}

export default PostDetails

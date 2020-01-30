import React, { useEffect, useState, useRef, ReactNode } from 'react'
import styled from 'styled-components'
import { useParams, Redirect } from 'react-router-dom'
import { getPost } from '../actions/posts-actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { IPost } from '../models/post'
import CommentList from './CommentList'
import AddCommentModal from './AddCommentModal'
import { addComment, clearComments } from '../actions/comments-actions'
import mainTheme from '../constants/theme'

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const HideCommentsButton = styled.button`
  background: transparent;
  border: none;
  color: ${mainTheme.secondaryColor};
  text-decoration: underline;
`

const AddCommentButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  color: ${mainTheme.secondaryColor};
  text-decoration: underline;
`

interface RouteParams {
  postId: string
  userId: string
}

const PostDetails: React.FC = () => {
  const { postId, userId } = useParams<RouteParams>()
  const dispatch = useDispatch()
  const wasDeleted = useRef(false)

  const [commentsVisible, setCommentsVisible] = useState(false)
  const [addCommentVisible, setAddCommentVisible] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const post = useSelector<RootState, IPost | null>(
    state => state.postsReducer.selectedPost
  )

  const postError = useSelector<RootState, boolean | null>(
    state => state.postsReducer.postLoadingError
  )

  const isPostDeleting = useSelector<RootState, number | null>(
    state => state.postsReducer.isDeletingPostId
  )

  useEffect(() => {
    if (wasDeleted.current) setRedirect(true)
    if (!post || post.id !== +postId) {
      dispatch(getPost(+postId))
      dispatch(clearComments())
    }
    if (isPostDeleting !== null) wasDeleted.current = true
  }, [dispatch, postId, isPostDeleting, post])

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

  const postView = (
    <div>
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
    </div>
  )

  const view = (): ReactNode => {
    if (postError) return 'No such post'
    return postView
  }

  return <div>{view()}</div>
}

export default PostDetails

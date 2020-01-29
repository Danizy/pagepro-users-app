import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { getPosts } from '../actions/posts-actions'
import { Post } from '../models/post'
import PostListElement from './PostListElement'
import LoadingIndicator from './LoadingIndicator'
import { useParams } from 'react-router-dom'

const PostListWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

interface RouteParams {
  userId: string
}

const PostList: React.FC = () => {
  const dispatch = useDispatch()
  const { userId } = useParams<RouteParams>()
  const previousUserId = useSelector<RootState, number | undefined>(
    state => state.usersReducer.selectedUser?.id
  )
  const posts = useSelector<RootState, Post[]>(
    state => state.postsReducer.posts
  )

  const postsLoading = useSelector<RootState, boolean | undefined>(
    state => state.postsReducer.isLoading
  )

  useEffect(() => {
    if (previousUserId && (previousUserId !== +userId || posts.length === 0))
      dispatch(getPosts(previousUserId))
  }, [dispatch, previousUserId, userId, posts.length])

  const list = posts.map(post => (
    <PostListElement key={post.id} postTitle={post.title} postId={post.id} />
  ))

  return (
    <PostListWrapper>
      {postsLoading ? <LoadingIndicator /> : list}
    </PostListWrapper>
  )
}

export default PostList

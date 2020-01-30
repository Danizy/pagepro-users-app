import React, { useEffect, ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { getPosts } from '../actions/posts-actions'
import { Post } from '../models/post'
import PostListElement from './PostListElement'
import LoadingIndicator from './LoadingIndicator'
import { useParams } from 'react-router-dom'

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

  const loadingError = useSelector<RootState, boolean | undefined>(
    state => state.postsReducer.error
  )

  useEffect(() => {
    if (previousUserId && (previousUserId !== +userId || posts.length === 0))
      dispatch(getPosts(previousUserId))
  }, [dispatch, previousUserId, userId, posts.length])

  const list = posts.map(post => (
    <PostListElement key={post.id} postTitle={post.title} postId={post.id} />
  ))

  const view = (): ReactNode => {
    if (loadingError) return 'Error loading posts'
    if (postsLoading) return <LoadingIndicator />
    return list
  }

  return <div>{view()}</div>
}

export default PostList

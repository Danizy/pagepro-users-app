import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { getPosts } from '../actions/posts-actions'
import { Post } from '../models/post'
import PostListElement from './PostListElement'
import LoadingIndicator from './LoadingIndicator'

const PostListWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

const PostList: React.FC = () => {
  const dispatch = useDispatch()
  const userId = useSelector<RootState, number | undefined>(
    state => state.usersReducer.selectedUser?.id
  )
  const posts = useSelector<RootState, Post[]>(
    state => state.postsReducer.posts
  )

  const postsLoading = useSelector<RootState, boolean | undefined>(
    state => state.postsReducer.isLoading
  )

  useEffect(() => {
    if (userId) dispatch(getPosts(userId))
  }, [dispatch, userId])

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

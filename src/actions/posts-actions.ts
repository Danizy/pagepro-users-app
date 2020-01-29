import { IPost, Post } from '../models/post'
import {
  PostsActionTypes,
  GET_POSTS_FAILED,
  GET_POSTS,
  GET_POSTS_FINISHED,
  DELETE_POST_FINISHED,
  DELETE_POST_FAILED,
  DELETE_POST,
  CLEAN_POST_ERROR,
  ADD_POST_FINISHED,
  ADD_POST_FAILED,
  ADD_POST,
  GET_POST_FINISHED,
  GET_POST_FAILED,
  GET_POST,
} from './posts-types'
import { ThunkAction } from 'redux-thunk'
import { IPostsState } from '../reducers/posts-reducer'
import { Dispatch } from 'redux'
import {
  fetchPosts,
  addPost as serviceAddPost,
  fetchPost,
} from '../services/posts-service'

const getPostsFinished = (posts: IPost[]): PostsActionTypes => ({
  type: GET_POSTS_FINISHED,
  payload: posts,
})

const getPostsFailed = (): PostsActionTypes => ({
  type: GET_POSTS_FAILED,
})

export const getPosts = (
  userId: number
): ThunkAction<void, IPostsState, null, PostsActionTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: GET_POSTS })
    try {
      const posts = await fetchPosts(userId)
      dispatch(getPostsFinished(posts))
    } catch (error) {
      dispatch(getPostsFailed())
    }
  }
}

const deletePostFinished = (postId: number): PostsActionTypes => ({
  type: DELETE_POST_FINISHED,
  payload: postId,
})

const deletePostFailed = (): PostsActionTypes => ({
  type: DELETE_POST_FAILED,
})

export const deletePost = (
  postId: number
): ThunkAction<void, IPostsState, null, PostsActionTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: DELETE_POST, payload: postId })
    try {
      await deletePost(postId)
      dispatch(deletePostFinished(postId))
    } catch (error) {
      dispatch(deletePostFailed())
    }
  }
}

export const cleanPostEroor = (): PostsActionTypes => ({
  type: CLEAN_POST_ERROR,
})

const addPostFinished = (post: IPost): PostsActionTypes => ({
  type: ADD_POST_FINISHED,
  payload: post,
})

const addPostFailed = (): PostsActionTypes => ({
  type: ADD_POST_FAILED,
})

export const addPost = (
  title: string,
  body: string
): ThunkAction<void, IPostsState, null, PostsActionTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: ADD_POST })
    try {
      const post = new Post({ id: 0, userId: 0, body, title })
      const { id } = await serviceAddPost(post)
      post.id = id
      dispatch(addPostFinished(post))
    } catch (error) {
      dispatch(addPostFailed())
    }
  }
}

const getPostFinished = (post: IPost): PostsActionTypes => ({
  type: GET_POST_FINISHED,
  payload: post,
})

const getPostFailed = (): PostsActionTypes => ({
  type: GET_POST_FAILED,
})

export const getPost = (
  postId: number
): ThunkAction<void, IPostsState, null, PostsActionTypes> => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: GET_POST })
    try {
      const post = await fetchPost(postId)
      dispatch(getPostFinished(post))
    } catch (error) {
      dispatch(getPostFailed())
    }
  }
}

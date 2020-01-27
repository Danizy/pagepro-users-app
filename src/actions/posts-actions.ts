import { IPost } from '../models/post'
import { PostsActionTypes, GET_POSTS_FAILED, GET_POSTS } from './posts-types'
import { ThunkAction } from 'redux-thunk'
import { IPostsState } from '../reducers/posts-reducer'
import { Dispatch } from 'redux'
import { fetchPosts } from '../services/posts-service'

const getPostsFinished = (posts: IPost[]): PostsActionTypes => ({
  type: 'GET_POSTS_FINISHED',
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
      getPostsFailed()
    }
  }
}

import React, { useEffect, useState, ReactNode } from 'react'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom'
import UserHeader from './UserHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../actions/users-actions'
import PostList from './PostList'
import AddPostModal from './AddPostModal'
import { addPost, deletePost } from '../actions/posts-actions'
import { RootState } from '../store'
import ModalWrapper from './ModalWrapper'
import PostDetails from './PostDetails'

interface RouteParams {
  userId: string
}

const UserDetails: React.FC = () => {
  const { userId } = useParams<RouteParams>()
  const dispatch = useDispatch()
  const match = useRouteMatch()
  const [addPostModalVisible, setAddPostModalVisible] = useState(false)

  const isPostAdding = useSelector<RootState, boolean | null>(
    state => state.postsReducer.isPostAdding
  )

  const previousUserId = useSelector<RootState, number | undefined>(
    state => state.usersReducer.selectedUser?.id
  )

  const userLoading = useSelector<RootState, boolean | undefined>(
    state => state.usersReducer.isLoading
  )

  const userLoadingError = useSelector<RootState, boolean | undefined>(
    state => state.usersReducer.error
  )

  const postId = useSelector<RootState, number | undefined>(
    state => state.postsReducer.selectedPost?.id
  )

  const handleRomovePostClick = (): void => {
    if (postId !== undefined) dispatch(deletePost(postId))
  }

  useEffect(() => {
    dispatch(getUser(+userId))
  }, [userId, dispatch, previousUserId])

  const toggleShowModal = (): void => setAddPostModalVisible(state => !state)

  const handleModalSaveClick = (postTitle: string, postBody: string): void => {
    toggleShowModal()
    dispatch(addPost(postTitle, postBody))
  }

  const userLoaded = (
    <div>
      <UserHeader
        onAddClick={toggleShowModal}
        onRemoveClick={handleRomovePostClick}
      />
      <div>
        <Switch>
          <Route path={`${match.path}/:postId`}>
            <PostDetails />
          </Route>
          <Route path={`${match.path}/`}>
            <PostList />
          </Route>
        </Switch>
        {addPostModalVisible && (
          <AddPostModal
            onCancel={toggleShowModal}
            onSave={handleModalSaveClick}
          />
        )}
        {isPostAdding && (
          <ModalWrapper modalTitle="Loading">
            <h2>Post is beeing added</h2>
          </ModalWrapper>
        )}
      </div>
    </div>
  )

  const view = (): ReactNode => {
    if (userLoadingError) return 'No such user'
    if (userLoading) return 'Loading'
    return userLoaded
  }

  return <div>{view()}</div>
}

export default UserDetails

import React from 'react'
import styled from 'styled-components'
import binPng from '../assets/binIcon.png'
import arrowPng from '../assets/arrow.png'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../actions/posts-actions'
import { RootState } from '../store'
import { Link, useRouteMatch } from 'react-router-dom'

const PostListItemWrapper = styled.div`
  position: relative;
  display: flex;
  border: solid black 3px;
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`

const BinIcon = styled.img`
  width: 40px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`

const ArrowIcon = styled.img`
  width: 40px;
  margin-left: 20px;
`

const PostTitle = styled.div`
  display: flex;
  flex: 1;
`

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  padding-top: 15px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`

type PostProps = {
  postTitle: string
  postId: number
}

const PostListElement: React.FC<PostProps> = ({ postTitle, postId }) => {
  const dispatch = useDispatch()
  const match = useRouteMatch()

  const isBeeingDeleted = useSelector<RootState, number | null>(
    state => state.postsReducer.isDeletingPostId
  )

  const handleDeleteClick = (): void => {
    dispatch(deletePost(postId))
  }

  return (
    <PostListItemWrapper>
      {isBeeingDeleted === postId && <LoadingOverlay>Deleting</LoadingOverlay>}
      <BinIcon src={binPng} onClick={handleDeleteClick} />
      <PostTitle>{postTitle}</PostTitle>
      <Link to={`${match.url}/${postId}`}>
        <ArrowIcon src={arrowPng} />
      </Link>
    </PostListItemWrapper>
  )
}

export default PostListElement

import React from 'react'
import styled from 'styled-components'
import binPng from '../assets/binIcon.png'
import arrowPng from '../assets/arrow.png'

const PostListItemWrapper = styled.div`
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
`

const ArrowIcon = styled.img`
  width: 40px;
  margin-left: 20px;
`

const PostTitle = styled.div`
  display: flex;
  flex: 1;
`

type PostProps = {
  postTitle: string
}

const PostListElement: React.FC<PostProps> = ({ postTitle }) => {
  return (
    <PostListItemWrapper>
      <BinIcon src={binPng} />
      <PostTitle>{postTitle}</PostTitle>
      <ArrowIcon src={arrowPng} />
    </PostListItemWrapper>
  )
}

export default PostListElement

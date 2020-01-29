import React from 'react'
import styled from 'styled-components'

const CommentListElementWrapper = styled.div`
  margin-bottom: 20px;
  border: solid black 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const CommentHeader = styled.div`
  display: flex;
`

const CommentTitle = styled.span`
  font-weight: bold;
`

const AuthorEmail = styled.span`
  margin-left: auto;
  color: #075394;
`

type CommentListElementProps = {
  commentTitle: string
  commentBody: string
  authorEmail: string
}

const CommentListElement: React.FC<CommentListElementProps> = ({
  commentBody,
  commentTitle,
  authorEmail,
}) => {
  return (
    <CommentListElementWrapper>
      <CommentHeader>
        <CommentTitle>{commentTitle}</CommentTitle>
        <AuthorEmail>{authorEmail}</AuthorEmail>
      </CommentHeader>
      <p>{commentBody}</p>
    </CommentListElementWrapper>
  )
}

export default CommentListElement

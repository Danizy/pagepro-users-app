import React from 'react'
import styled from 'styled-components'
import mainTheme from '../constants/theme'

const CommentListElementWrapper = styled.div`
  margin-bottom: 20px;
  border: ${mainTheme.border};
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

const AuthorEmail = styled.a`
  margin-left: auto;
  color: ${mainTheme.secondaryColor};
  text-decoration: underline;
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
        <AuthorEmail href={`mailto:${authorEmail}`}>{authorEmail}</AuthorEmail>
      </CommentHeader>
      <p>{commentBody}</p>
    </CommentListElementWrapper>
  )
}

export default CommentListElement

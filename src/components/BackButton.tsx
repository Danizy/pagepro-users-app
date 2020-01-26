import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const BackButtonContainer = styled.button`
  background: none;
  border: none;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #075394;

  &:hover {
    cursor: pointer;
  }
`

const BackArrow = styled.span`
  font-size: 100px;
  line-height: 100px;
  padding-bottom: 15px;
`

const BackText = styled.span`
  font-size: 25px;
`

const BackButton: React.FC<RouteComponentProps> = ({ history }) => {
  const handleClick = (): void => history.goBack()

  return (
    <BackButtonContainer onClick={handleClick}>
      <BackArrow>&larr;</BackArrow>
      <BackText>Back</BackText>
    </BackButtonContainer>
  )
}

export default withRouter(BackButton)

import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import mainTheme from '../constants/theme'

const BackButtonContainer = styled.button`
  background: none;
  border: none;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainTheme.secondaryColor};

  &:hover {
    cursor: pointer;
  }
`

const BackArrow = styled.span`
  font-size: 90px;
  line-height: 90px;
`

const BackText = styled.span`
  font-size: 25px;
  height: 100%;
  margin-top: 10px;
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

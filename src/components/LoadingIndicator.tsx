import React from 'react'
import styled from 'styled-components'

const LoadingIndicatorWrapper = styled.div`
  text-align: center;
  background-color: gray;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`

const LoadingIndicator: React.FC = () => {
  return (
    <LoadingIndicatorWrapper>
      <h2>Loading...</h2>
    </LoadingIndicatorWrapper>
  )
}

export default LoadingIndicator

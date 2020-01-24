import React from 'react'
import styled from 'styled-components'
import UserListItem from './UserListItem'

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
`

const App: React.FC = () => (
  <MainWrapper>
    <UserListItem></UserListItem>
    <UserListItem></UserListItem>
    <UserListItem></UserListItem>
    <UserListItem></UserListItem>
    <UserListItem></UserListItem>
  </MainWrapper>
)

export default App

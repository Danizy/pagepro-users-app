import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import UserList from './UserList'
import UserDetails from './UserDetails'

const MainWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route path="/users/:userId">
          <UserDetails />
        </Route>
        <Route path="/">
          <UserList />
        </Route>
      </Switch>
    </MainWrapper>
  )
}

export default App

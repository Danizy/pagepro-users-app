import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import postsReducer from './posts-reducer'

const rootReducer = combineReducers({
  usersReducer,
  postsReducer,
})

export default rootReducer

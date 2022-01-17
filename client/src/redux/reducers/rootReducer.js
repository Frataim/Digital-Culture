import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { taskReducer } from './taskReducer'
import { usersReducer } from './usersReducer'
import { commentsReducer } from './commentsReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
  users: usersReducer,
  comments: commentsReducer,
})

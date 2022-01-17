import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { taskReducer } from './taskReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
  users: usersReducer,
})

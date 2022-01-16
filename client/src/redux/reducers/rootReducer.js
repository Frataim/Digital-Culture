import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { projectReducer } from "./projectReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  task: projectReducer,
})

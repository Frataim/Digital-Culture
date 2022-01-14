import { combineReducers } from "redux"
import { projectReducer } from "./projectReducer"

export const rootReducer = combineReducers({
  task: projectReducer,
})

import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { taskReducer } from './taskReducer'
import { usersReducer } from './usersReducer'
import { commentsReducer } from './commentsReducer'
import { feedbacksReducer } from './feedbacksReducer'
import { chatMsgReducer } from './chatMsgReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
  users: usersReducer,
  comments: commentsReducer,
  feedbacks: feedbacksReducer,
  chats: chatMsgReducer,
})

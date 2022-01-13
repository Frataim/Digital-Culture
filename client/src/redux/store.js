import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import initialState from "./initialState/initialState"
import thunk from "redux-thunk"
import { rootReducer } from "./reducers/rootReducers"


export const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk)))

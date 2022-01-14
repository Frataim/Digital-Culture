import initialState from "../initialState/initialState"
import { ADD_PROJECT } from "../types/addProject"
import { GET_PROJECT } from "../types/getProject"


export const projectReducer = (state = initialState, action) => {
   const {type, payload} = action
  switch (type) {
    case ADD_PROJECT:
      return [...state]
    case GET_PROJECT:
      return [...state]
    default:
      return state
  }
}

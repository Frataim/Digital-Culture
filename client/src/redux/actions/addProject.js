import { ADD_PROJECT } from "../types/addProject"


export const addProject = (data) => {
  return { type: ADD_PROJECT, payload: data }
}

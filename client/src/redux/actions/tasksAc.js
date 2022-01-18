import axios from 'axios'
import { ADD_TASK, ALL_TASKS } from '../types/tasksTypes'

export const allTasks = () => (dispatch) => {
  fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => dispatch({
      type: ALL_TASKS,
      payload: data
    }))
}
export const addTask = (response) => ({
  type: ADD_TASK,
  payload: response,
})

export const addUserThunk = (task) => async (dispatch) => {
  console.log('thunk check ---------->', task)
  const userFromBack = await axios.post('http://localhost:3001/tasks', { task })
  const response = userFromBack.data
  dispatch(addTask(response))
}

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

export const addTaskThunk = (task) => async (dispatch) => {
  console.log('thunk check ---------->', task)
  const userFromBack = await axios.post('http://localhost:3001/tasks', {task})
  const response = userFromBack.data
  dispatch(addTask(response))
}

export const upTask = (response) => ({
  type: ADD_TASK,
  payload: response,
})

export const upTaskThunk = (task_id, user_id) => async (dispatch) => {
  console.log('thunk upTask ---------->', task_id, user_id)
  const userFromBack = await axios.patch('http://localhost:3001/tasks', {task_id, user_id})
  const response = userFromBack.data
  dispatch(upTask(response))
}

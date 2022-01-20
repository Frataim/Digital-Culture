import axios from 'axios'
import { ADD_TASK, ALL_TASKS, TASK_UP, FILTER_TASK, SEARCH_TASK } from '../types/tasksTypes'

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

  const userFromBack = await axios.post('http://localhost:3001/tasks', { task })
  const response = userFromBack.data
  dispatch(addTask(response))
}

export const upTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const upTaskThunk = (task_id, user_id) => async (dispatch) => {

  const userFromBack = await axios.patch('http://localhost:3001/tasks', { task_id, user_id })
  const response = userFromBack.data
  dispatch(upTask(response))
}

export const filteredTask = (data) => (dispatch) => {

  dispatch({
    type: FILTER_TASK,
    payload: data
  })
}

export const searchTask = (data) => (dispatch) => {
  console.log('ACTIOOOOOONS', data);
  dispatch({
    type: SEARCH_TASK,
    payload: data
  })
}

export const deleteTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const deleteTaskThunk = (task_id) => async (dispatch) => {

  const userFromBack = await axios.patch('http://localhost:3001/tasks/delete', { task_id })
  const response = userFromBack.data
  dispatch(deleteTask(response))
}

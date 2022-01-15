import { ALL_TASKS } from '../types/tasksTypes'

export const allTasks = () => (dispatch) => {
  fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => dispatch({
      type: ALL_TASKS,
      payload: data
    }))
}

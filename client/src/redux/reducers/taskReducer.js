import { ALL_TASKS, TASK_USER } from '../types/tasksTypes'


export const taskReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ALL_TASKS: {
      return payload
    }

    case TASK_USER: {

    }

    default: {
      return state
    }
  }
}

import { ADD_TASK, ALL_TASKS, TASK_UP } from '../types/tasksTypes'


export const taskReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ALL_TASKS: {
      return payload
    }

    case ADD_TASK: {
      console.log('reducer ========>', payload);
      return [
        ...state,
        payload
      ]
    }

    case TASK_UP: {
      console.log('reducer ========>', payload);
      return state
    }

    default: {
      return state
    }
  }
}

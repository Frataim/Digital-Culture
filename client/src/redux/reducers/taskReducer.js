import { ADD_TASK, ALL_TASKS } from '../types/tasksTypes'


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

    default: {
      return state
    }
  }
}

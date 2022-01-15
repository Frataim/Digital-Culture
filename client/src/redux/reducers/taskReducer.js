import { ALL_TASKS } from '../types/tasksTypes'


export const taskReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ALL_TASKS: {
      return payload
    }

    default: {
      return state
    }
  }
}

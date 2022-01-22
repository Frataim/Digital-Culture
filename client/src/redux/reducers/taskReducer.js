import { ADD_TASK, ALL_TASKS, DELETE_TASK, FILTER_TASK, SEARCH_TASK, TASK_UP } from '../types/tasksTypes'


export const taskReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case ALL_TASKS: {
      return payload
    }

    case ADD_TASK: {

      return [
        ...state,
        payload
      ]
    }

    case TASK_UP: {
      return state = state.map((prev) => {
        if (prev.id === payload.id) {
          return payload
        }
        return prev
      })
    }
    case DELETE_TASK: {
      return state = state.map((prev) => {
        if (prev.id === payload.id) {
          return payload
        }
        return prev
      })
    }

    case FILTER_TASK: {

      return state.filter((el) => el.category === payload)
    }

    case SEARCH_TASK: {
      const newPa = payload.toLowerCase()
      return state.filter((el) => {
        return el.title.toLowerCase().includes(newPa)
      })
    }

    default: {
      return state
    }
  }
}

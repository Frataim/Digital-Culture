import { ADD_TASK, ALL_TASKS, FILTER_TASK, SEARCH_TASK, TASK_UP } from '../types/tasksTypes'


export const taskReducer = (state = [], action) => {
  const { type, payload } = action
  // console.log('вот они летят----', payload);
  switch (type) {
    case ALL_TASKS: {
      console.log('сработало');
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

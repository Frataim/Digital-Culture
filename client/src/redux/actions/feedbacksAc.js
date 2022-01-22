import axios from 'axios'
import { ADD_FEEDBACK, ALL_FEEDBACKS } from '../types/feedbacksTypes'

export const allFeedbacks = () => (dispatch) => {
  fetch('http://localhost:3001/feedback')
    .then(res => res.json())
    .then(data => dispatch({
      type: ALL_FEEDBACKS,
      payload: data
    }))
}
export const addFeedback = (response) => ({
  type: ADD_FEEDBACK,
  payload: response,
})

export const addFeedbackThunk = (feedback , task_id, currentUser, stars) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/feedback', {feedback, task_id, currentUser, stars})
  const response = userFromBack.data
  dispatch(addFeedback(response))
}

import axios from 'axios'
import { ADD_COMMENT, ALL_COMMENTS } from '../types/commentsTypes'

export const allComments = () => (dispatch) => {
  fetch('http://localhost:3001/comment')
    .then(res => res.json())
    .then(data => dispatch({
      type: ALL_COMMENTS,
      payload: data
    }))
}
export const addComment = (response) => ({
  type: ADD_COMMENT,
  payload: response,
})

export const addCommentThunk = (comment, task_id) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/comment', {comment, task_id})
  const response = userFromBack.data
  dispatch(addComment(response))
}

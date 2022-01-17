import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFeedbackThunk } from '../../../../redux/actions/feedbacksAc'

function FeedbackForm () {

  const [feedback, setFeedback] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e) => {
    console.log(e.target.value);
    setFeedback(e.target.value)
  }

  const task_id = 1

  const feedbackHandler = (e) => {
    e.preventDefault()
    console.log('send form >>>>>>', feedback)
    dispatch(addFeedbackThunk(feedback , task_id))
    navigate('/')
  }

  return (
      <form className={style.mainContainer} onSubmit={(e) => feedbackHandler(e)}>
        <input 
          className={style.input}
          type='text'
          name='feedback'
          value={feedback}
          onChange={inputChange}
        />
        <div id="emailHelp" class="form-text">оставьте свой отзыв по итогам работы на заданием</div>
        <button className={style.btn} type="submit">ОСТАВИТЬ ОТЗЫВ</button>
      </form>
  )
}

export default FeedbackForm

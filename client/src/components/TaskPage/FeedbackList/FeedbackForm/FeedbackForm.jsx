import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFeedbackThunk } from '../../../../redux/actions/feedbacksAc'

function FeedbackForm () {

  const {id} = useParams()

  const [feedback, setFeedback] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e) => {
    console.log(e.target.value);
    setFeedback(e.target.value)
  }

  const task_id = +id

  const feedbackHandler = (e) => {
    e.preventDefault()
    console.log('send form >>>>>>', feedback)
    dispatch(addFeedbackThunk(feedback , task_id))
    setFeedback('')
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
        <div id="emailHelp" className="form-text">оставьте свой отзыв по итогам работы на заданием</div>
        <button className={style.btn} type="submit">ОСТАВИТЬ ОТЗЫВ</button>
      </form>
  )
}

export default FeedbackForm

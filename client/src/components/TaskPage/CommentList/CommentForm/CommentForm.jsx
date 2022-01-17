import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCommentThunk } from '../../../../redux/actions/commentsAc'

function CommentForm () {

  const {id} = useParams()

  const [comment, setComment] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setComment(e.target.value)
  }

  const task_id = +id

  const commentHandler = (e) => {
    e.preventDefault()
    console.log('send form >>>>>>', comment)
    dispatch(addCommentThunk(comment , task_id))
    navigate('/')
  }

  return (
      <form className={style.mainContainer} onSubmit={(e) => commentHandler(e)}>
        <textarea 
          className={style.input}
          type='text'
          name='comment'
          value={comment}
          onChange={inputChange}
        />
        <div id="emailHelp" class="form-text">напишите кратко о себе, опыте, оставьте ссылку на резюме, портфолио</div>
        <button className={style.btn} type="submit">ПОДПИСАТЬСЯ НА ЗАДАНИЕ</button>
      </form>
  )
}

export default CommentForm

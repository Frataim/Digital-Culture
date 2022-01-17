import React from 'react'
import style from './style.module.css'
import img from '../../../task_create_img.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCommentThunk } from '../../../redux/actions/commentsAc'

function CommentForm () {

  const [comment, setComment] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setComment(e.target.value)
  }

  const task_id = 1

  const commentHandler = (e) => {
    e.preventDefault()
    console.log('send form >>>>>>', comment)
    dispatch(addCommentThunk(comment , task_id))
    navigate('/')
  }

  return (
      <form className={style.taskContainer, style.mainContainer} onSubmit={(e) => commentHandler(e)}>
        <input 
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
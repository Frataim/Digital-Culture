import React from 'react'
import style from './style.module.css'
import img from '../../../task_create_img.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUserThunk } from '../../../redux/actions/tasksAc'

function CreateTask () {

  const [task, setTask] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log('-----------> task', task);

  const taskHandler = (e) => {
    e.preventDefault()
    console.log('send form >>>>>>', task)
    dispatch(addUserThunk(task))
    navigate('/')
  }

  return (
    <div className={style.mainContainer}>
      <form className={style.taskContainer} onSubmit={(e) => taskHandler(e)}>
        <label className={style.label}>НАЗВАНИЕ</label>
        <input 
          className={style.input}
          type='text'
          name='title'
          value={task.name}
          onChange={inputChange}
        />
        <label className={style.label}>ОПИСАНИЕ</label>
        <textarea 
          className={style.input}
          type='text'
          name='description'
          value={task.description}
          onChange={inputChange}
        ></textarea>
        {/* <label className={style.label}>КАТЕГОРИЯ</label>
        <select className={style.input}></select> */}
        <label className={style.label}>СРОКИ</label>
        <input 
          type="date"
          className={style.input}
          name='deadline'
          value={task.deadline}
          onChange={inputChange}
        />
        <label className={style.label}>ТЭГИ</label>
        <input 
          className={style.input}
          type='text'
          name='tags'
          value={task.tags}
          onChange={inputChange}
        />
        <div id="emailHelp" class="form-text">указывайте тэги через запятую, не более 3-х</div>
        <br/>
        <button className={style.btn} type="submit">ОПУБЛИКОВАТЬ</button>
      </form>
      <div className={style.taskImg}>
        <img src={img}/>
      </div>
    </div>
  )
}

export default CreateTask

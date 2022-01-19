import React from 'react'
import style from './style.module.css'
import img from '../../../task_create_img.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTaskThunk } from '../../../redux/actions/tasksAc'

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
    dispatch(addTaskThunk(task))
    navigate('/tasks')
  }
  console.log(task.category);
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
        <label className={style.label}>КАТЕГОРИЯ</label>
        <select className={style.input} value={task.category} name='category' onChange={inputChange}>
          <option disabled value='Выбирите категорию'>Выбирите категорию</option>
          <option selected value="Веб-сайты">Веб-сайты</option>
          <option value="Мобильные приложения">Мобильные приложения</option>
          <option value="Виртуальная реальность">Виртуальная реальность</option>
          <option value="Игры">Игры</option>
          <option value="Чат-боты">Чат-боты</option>
          <option value="Робототехника">Робототехника!</option>
          <option value="Другое">Другое!</option>
        </select>
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

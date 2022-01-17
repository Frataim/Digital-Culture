import React from 'react'
import style from './style.module.css'
import img from '../../../task_create_img.png'

function CreateTask () {
  return (
    <div className={style.mainContainer}>
      <div className={style.taskContainer}>
        <label className={style.label}>НАЗВАНИЕ</label>
        <input className={style.input}></input>
        <label className={style.label}>ОПИСАНИЕ</label>
        <textarea className={style.input}></textarea>
        {/* <label className={style.label}>КАТЕГОРИЯ</label>
        <select className={style.input}></select> */}
        <label className={style.label}>СРОКИ</label>
        <input type="date"className={style.input}></input>
        <label className={style.label}>ТЭГИ</label>
        <input className={style.input}></input>
        <div id="emailHelp" class="form-text">указывайте тэги через запятую, не более 3-х</div>
        <br/>
        <button type="submit">ОПУБЛИКОВАТЬ</button>
      </div>
      <div className={style.taskImg}>
        <img src={img}/>
      </div>
    </div>
  )
}

export default CreateTask

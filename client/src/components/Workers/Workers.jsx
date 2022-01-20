import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from './style.module.css'
import { Link } from 'react-router-dom'


function Workers() {
  const workers = useSelector(store => store.users.reverse())

  const tasks = useSelector(store => store.tasks)

  const arr = []

  function rating(arr) {
    const one = arr.reduce((acc, cur) => {
      if (cur.Rates.rate === 5) {
        return cur + acc
      }
    }, 0)
  }


  return (
    <>{workers &&

      <div className={style.workersContainer}>
        <h2 className={style.workerSearchHeader}>Поиск по исполнителю</h2>
        <div className={style.filterContainer}>
          <input className={style.input} type="text" />
        </div>
        {workers.map((el) => {
          return <div id={el.id} className={style.currentWorker}>
            <div className={style.imgContainer}>
              <img src={el.avatar} alt="" />
            </div>
            <div className={style.ratingContainer}>
              <Link to={`/workers/${el.id}`} className={style.currentName}><div>{el.name}</div></Link>
              <div className={style.ratingsContainer}>
                <div className={style.currentRating}>5/5</div>
                <div className={style.currentRew}>Отзывов : 3</div>
              </div>
            </div>
            <div className={style.infoWorkerContainer}>
              <div className={style.doneContainer}>
                <div className={style.rating}>1</div>
                <div className={style.done}>Решенных задач: {tasks.filter(task => el.id === task.worker && task.isDone === true).length} </div>
              </div>
            </div>
          </div>
        })}
      </div>
    }
    </>
  )
}

export default Workers

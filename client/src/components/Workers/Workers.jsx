import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getAllUsers, searchUser } from '../../redux/actions/usersAc'


function Workers() {
  const workers = useSelector(store => store.users.reverse())

  const tasks = useSelector(store => store.tasks)

  const dispatch = useDispatch()

  // let [input, setInput] = useState('')

  // useEffect(() => {
  //   if (input = '') {
  //     dispatch(getAllUsers())
  //   }
  //   console.log(input);
  //   dispatch(searchUser(input))
  // }, [input])




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
              <img className={style.img} src={el.avatar} alt="" />
            </div>
            <div className={style.ratingContainer}>
              <Link to={`/workers/${el.id}`} className={style.currentName}><div>{el.name}</div></Link>
              <div className={style.ratingsContainer}>
                <div className={style.currentRating}>Рейтинг: {Math.floor(Math.random() * (5 - 1) + 1)}/5</div>
                <div className={style.currentRew}>Отзывов : {Math.floor(Math.random() * (50 - 0) + 0)}</div>
              </div>
            </div>
            <div className={style.infoWorkerContainer}>
              <div className={style.doneContainer}>
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

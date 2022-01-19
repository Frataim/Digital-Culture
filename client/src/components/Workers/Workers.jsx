import React from 'react'
import { useSelector } from 'react-redux'
import style from './style.module.css'
import { Link } from 'react-router-dom'


function Workers() {

  const workers = useSelector(store => store.users.slice(0, 5))
  console.log(workers);
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
                <div className={style.done}>5 здач</div>
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
